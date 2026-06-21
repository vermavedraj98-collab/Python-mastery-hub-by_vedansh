import { useProgress } from '../context/ProgressContext.jsx'
import { getLevelInfo } from '../data/levels.js'
import { PUBLISHED_IDS } from '../data/lessons.js'

export default function StatsPanel() {
  const { progress } = useProgress()
  const levelInfo = getLevelInfo(progress.xp)
  const completedCount = progress.completedModules.length
  const totalPublished = PUBLISHED_IDS.length

  return (
    <div className="stats-panel">
      <div className="stat-card stat-card-level">
        <span className="stat-label">Trail Rank</span>
        <span className="stat-value">{levelInfo.name}</span>
        <div className="xp-bar">
          <div className="xp-bar-fill" style={{ width: `${levelInfo.progressPct}%` }} />
        </div>
        <span className="stat-sub">
          {progress.xp} XP
          {levelInfo.nextXp !== null
            ? ` · ${levelInfo.nextXp - progress.xp} XP to ${levelInfo.nextName}`
            : ' · Max rank reached'}
        </span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Streak</span>
        <span className="stat-value">
          🔥 {progress.streak} day{progress.streak === 1 ? '' : 's'}
        </span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Lessons Completed</span>
        <span className="stat-value">
          {completedCount} / {totalPublished}
        </span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Bookmarked</span>
        <span className="stat-value">{progress.bookmarks.length}</span>
      </div>
    </div>
  )
}
