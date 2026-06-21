import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MODULES, TIERS } from '../data/modules.js'

export default function SearchBar({ onNavigate }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const results =
    query.trim().length > 0
      ? MODULES.filter((m) => m.title.toLowerCase().includes(query.trim().toLowerCase())).slice(0, 8)
      : []

  function goTo(id) {
    setQuery('')
    setOpen(false)
    navigate(`/lesson/${id}`)
    if (onNavigate) onNavigate()
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        placeholder="Search the trail (e.g. loops, strings, classes)…"
        aria-label="Search modules"
        onChange={(e) => {
          setQuery(e.target.value)
          setOpen(true)
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') setOpen(false)
          if (e.key === 'Enter' && results.length > 0) goTo(results[0].id)
        }}
      />
      {open && query.trim().length > 0 && (
        <div className="search-results">
          {results.length === 0 ? (
            <p className="search-empty">No waypoints match "{query}" yet.</p>
          ) : (
            results.map((m) => (
              <button
                key={m.id}
                className="search-result"
                onMouseDown={() => goTo(m.id)}
              >
                <span className="search-result-id">#{String(m.id).padStart(3, '0')}</span>
                <span className="search-result-title">{m.title}</span>
                <span className="search-result-tier">{TIERS[m.tier].label}</span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  )
}
