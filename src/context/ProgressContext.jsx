import React, { createContext, useContext, useEffect, useState } from 'react'
import { XP_PER_LESSON } from '../data/levels.js'

const ProgressContext = createContext(null)
const STORAGE_KEY = 'pmh_progress'

const DEFAULT_PROGRESS = {
  name: '',
  xp: 0,
  completedModules: [],
  bookmarks: [],
  notes: {},
  streak: 0,
  lastVisit: null,
}

function loadProgress() {
  if (typeof window === 'undefined') return DEFAULT_PROGRESS
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_PROGRESS
    const parsed = JSON.parse(raw)
    return { ...DEFAULT_PROGRESS, ...parsed }
  } catch (e) {
    return DEFAULT_PROGRESS
  }
}

function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

function yesterdayStr() {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return d.toISOString().slice(0, 10)
}

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(loadProgress)

  // Update the daily streak once when the app first loads.
  useEffect(() => {
    setProgress((prev) => {
      const today = todayStr()
      if (prev.lastVisit === today) return prev
      const wasYesterday = prev.lastVisit === yesterdayStr()
      return {
        ...prev,
        streak: wasYesterday ? prev.streak + 1 : 1,
        lastVisit: today,
      }
    })
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  function toggleComplete(id) {
    setProgress((prev) => {
      const isDone = prev.completedModules.includes(id)
      return {
        ...prev,
        completedModules: isDone
          ? prev.completedModules.filter((m) => m !== id)
          : [...prev.completedModules, id],
        xp: isDone ? Math.max(0, prev.xp - XP_PER_LESSON) : prev.xp + XP_PER_LESSON,
      }
    })
  }

  function toggleBookmark(id) {
    setProgress((prev) => ({
      ...prev,
      bookmarks: prev.bookmarks.includes(id)
        ? prev.bookmarks.filter((m) => m !== id)
        : [...prev.bookmarks, id],
    }))
  }

  function setNote(id, text) {
    setProgress((prev) => ({
      ...prev,
      notes: { ...prev.notes, [id]: text },
    }))
  }

  function setName(name) {
    setProgress((prev) => ({ ...prev, name }))
  }

  function resetProgress() {
    setProgress({ ...DEFAULT_PROGRESS, lastVisit: todayStr(), streak: 1 })
  }

  const value = {
    progress,
    toggleComplete,
    toggleBookmark,
    setNote,
    setName,
    resetProgress,
  }

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within a ProgressProvider')
  return ctx
}
