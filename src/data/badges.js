import { PUBLISHED_IDS } from './lessons.js'

// Each badge defines a check(progress) function that returns true once earned.
export const BADGE_DEFS = [
  {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Complete your first lesson.',
    icon: '🥾',
    check: (p) => p.completedModules.length >= 1,
  },
  {
    id: 'basecamp-grad',
    name: 'Basecamp Graduate',
    description: 'Complete every lesson published so far.',
    icon: '⛺',
    check: (p) => PUBLISHED_IDS.every((id) => p.completedModules.includes(id)),
  },
  {
    id: 'note-taker',
    name: 'Note Taker',
    description: 'Write notes on 3 different lessons.',
    icon: '📝',
    check: (p) => Object.values(p.notes).filter((n) => n && n.trim().length > 0).length >= 3,
  },
  {
    id: 'bookworm',
    name: 'Bookmark Collector',
    description: 'Bookmark 5 lessons to revisit later.',
    icon: '🔖',
    check: (p) => p.bookmarks.length >= 5,
  },
  {
    id: 'three-day-streak',
    name: '3-Day Streak',
    description: 'Visit the trail 3 days in a row.',
    icon: '🔥',
    check: (p) => p.streak >= 3,
  },
  {
    id: 'week-streak',
    name: '7-Day Streak',
    description: 'Visit the trail 7 days in a row.',
    icon: '⚡',
    check: (p) => p.streak >= 7,
  },
]

export function getUnlockedBadges(progress) {
  return BADGE_DEFS.filter((b) => b.check(progress))
}
