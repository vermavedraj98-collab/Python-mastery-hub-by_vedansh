import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'
import { getModule } from '../data/modules.js'
import { PUBLISHED_IDS } from '../data/lessons.js'
import StatsPanel from '../components/StatsPanel.jsx'
import BadgeGrid from '../components/BadgeGrid.jsx'

export default function Dashboard() {
  const { progress, setName, resetProgress } = useProgress()
  const [nameInput, setNameInput] = useState(progress.name || '')

  const allDone =
    PUBLISHED_IDS.length > 0 && PUBLISHED_IDS.every((id) => progress.completedModules.includes(id))
  const noteEntries = Object.entries(progress.notes).filter(([, text]) => text && text.trim())

  function handleNameSave(e) {
    e.preventDefault()
    setName(nameInput.trim())
  }

  function handleExportNotes() {
    if (noteEntries.length === 0) return
    const body = noteEntries
      .map(([id, text]) => {
        const m = getModule(id)
        return `#${id} ${m ? m.title : ''}\n${text}\n`
      })
      .join('\n---\n\n')
    const blob = new Blob([`Python Mastery Hub — My Notes\n\n${body}`], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'python-mastery-hub-notes.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  function handleReset() {
    if (window.confirm('Reset all progress? This clears XP, completed modules, bookmarks, and notes.')) {
      resetProgress()
    }
  }

  return (
    <div className="page dashboard-page">
      <h1>Your Dashboard</h1>

      <form className="name-form" onSubmit={handleNameSave}>
        <label htmlFor="learner-name">Name on your certificate</label>
        <div className="name-form-row">
          <input
            id="learner-name"
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="e.g. Asha Verma"
          />
          <button type="submit" className="btn btn-secondary">
            Save
          </button>
        </div>
      </form>

      <StatsPanel />

      <section>
        <h2>Badges</h2>
        <BadgeGrid />
      </section>

      {allDone && (
        <section className="certificate-callout">
          <p>You've completed every published lesson! Your certificate is ready.</p>
          <Link to="/certificate" className="btn btn-primary">
            View Certificate
          </Link>
        </section>
      )}

      <section className="dashboard-lists">
        <div>
          <h2>Bookmarked Lessons</h2>
          {progress.bookmarks.length === 0 ? (
            <p className="muted">No bookmarks yet — tap the ribbon icon on any lesson to save it here.</p>
          ) : (
            <ul className="link-list">
              {progress.bookmarks.map((id) => {
                const m = getModule(id)
                return m ? (
                  <li key={id}>
                    <Link to={`/lesson/${id}`}>
                      #{id} {m.title}
                    </Link>
                  </li>
                ) : null
              })}
            </ul>
          )}
        </div>

        <div>
          <h2>Notes</h2>
          {noteEntries.length === 0 ? (
            <p className="muted">No notes yet — the "My Notes" tab on any lesson saves automatically.</p>
          ) : (
            <>
              <ul className="link-list">
                {noteEntries.map(([id, text]) => {
                  const m = getModule(id)
                  return (
                    <li key={id}>
                      <Link to={`/lesson/${id}`}>
                        #{id} {m ? m.title : ''}
                      </Link>
                      <p className="note-preview">
                        {text.slice(0, 80)}
                        {text.length > 80 ? '…' : ''}
                      </p>
                    </li>
                  )
                })}
              </ul>
              <button className="btn btn-ghost" onClick={handleExportNotes} type="button">
                Download All Notes
              </button>
            </>
          )}
        </div>
      </section>

      <button className="btn btn-danger" onClick={handleReset} type="button">
        Reset All Progress
      </button>
    </div>
  )
}
