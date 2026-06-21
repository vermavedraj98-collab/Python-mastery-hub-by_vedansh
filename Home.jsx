import { Link } from 'react-router-dom'
import { TIERS, modulesByTier } from '../data/modules.js'
import { PUBLISHED_IDS } from '../data/lessons.js'
import { useProgress } from '../context/ProgressContext.jsx'
import TierIcon from '../components/TierIcon.jsx'

export default function Home() {
  const { progress } = useProgress()
  const hasProgress = progress.completedModules.length > 0
  const lastCompletedId = hasProgress ? Math.max(...progress.completedModules) : null
  const nextId = lastCompletedId ? Math.min(lastCompletedId + 1, 100) : 1

  const tierStats = Object.values(TIERS).map((tier) => {
    const mods = modulesByTier(tier.key)
    const publishedCount = mods.filter((m) => PUBLISHED_IDS.includes(m.id)).length
    return { ...tier, total: mods.length, publishedCount }
  })

  return (
    <div className="page home-page">
      <section className="hero">
        <div className="creator-badge">
          <TierIcon type="flag" size={16} />
          <span>
            Created by <strong>Vedansh Verma</strong> · Class 11 Commerce with Informatics Practices (IP)
          </span>
        </div>
        <p className="hero-eyebrow">100 Modules · Basecamp to Summit</p>
        <h1 className="hero-title">
          From <code>print("Hello, World")</code> to production code.
        </h1>
        <p className="hero-sub">
          Python Mastery Hub is a guided trail through Python — every module is a waypoint,
          every lesson gains you elevation. Earn XP, keep your streak alive, and collect badges
          as you climb from Basecamp to the Summit.
        </p>
        <div className="hero-actions">
          <Link to="/roadmap" className="btn btn-primary">
            Start the Trail
          </Link>
          {hasProgress && (
            <Link to={`/lesson/${nextId}`} className="btn btn-secondary">
              Resume at Module #{nextId}
            </Link>
          )}
        </div>
      </section>

      <section className="tier-teaser">
        {tierStats.map((tier) => (
          <Link to="/roadmap" className={`tier-card tier-${tier.key}`} key={tier.key}>
            <TierIcon type={tier.key} size={26} />
            <h3>{tier.label}</h3>
            <p className="tier-card-sub">{tier.subtitle}</p>
            <p className="tier-card-count">
              {tier.publishedCount} of {tier.total} lessons charted
            </p>
          </Link>
        ))}
      </section>

      {hasProgress && (
        <section className="home-stats-strip">
          <div>
            <span className="stat-label">Modules Completed</span>
            <span className="stat-value">{progress.completedModules.length}</span>
          </div>
          <div>
            <span className="stat-label">XP Earned</span>
            <span className="stat-value">{progress.xp}</span>
          </div>
          <div>
            <span className="stat-label">Current Streak</span>
            <span className="stat-value">🔥 {progress.streak}</span>
          </div>
        </section>
      )}
    </div>
  )
}
