import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'
import SearchBar from './SearchBar.jsx'
import TierIcon from './TierIcon.jsx'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
          <span className="navbar-brand-mark">PMH</span>
          <span className="navbar-brand-text">Python Mastery Hub</span>
        </Link>

        <button
          className="navbar-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`navbar-links ${menuOpen ? 'is-open' : ''}`}>
          <NavLink to="/roadmap" className="navbar-link" onClick={() => setMenuOpen(false)}>
            Roadmap
          </NavLink>
          <NavLink to="/dashboard" className="navbar-link" onClick={() => setMenuOpen(false)}>
            Dashboard
          </NavLink>
          <NavLink to="/glossary" className="navbar-link" onClick={() => setMenuOpen(false)}>
            Glossary
          </NavLink>
          <NavLink to="/error-handbook" className="navbar-link" onClick={() => setMenuOpen(false)}>
            Error Handbook
          </NavLink>
          <div className="navbar-search-mobile">
            <SearchBar onNavigate={() => setMenuOpen(false)} />
          </div>
        </nav>

        <div className="navbar-actions">
          <div className="navbar-search-desktop">
            <SearchBar />
          </div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            <TierIcon type={theme === 'light' ? 'moon' : 'sun'} size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
