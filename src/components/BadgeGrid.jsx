import { useProgress } from '../context/ProgressContext.jsx'
import { BADGE_DEFS, getUnlockedBadges } from '../data/badges.js'
import TierIcon from './TierIcon.jsx'

export default function BadgeGrid() {
  const { progress } = useProgress()
  const unlockedIds = getUnlockedBadges(progress).map((b) => b.id)

  return (
    <div className="badge-grid">
      {BADGE_DEFS.map((badge) => {
        const isUnlocked = unlockedIds.includes(badge.id)
        return (
          <div key={badge.id} className={`badge-card ${isUnlocked ? 'is-unlocked' : 'is-locked'}`}>
            <span className="badge-icon">
              {isUnlocked ? badge.icon : <TierIcon type="lock" size={16} />}
            </span>
            <span className="badge-name">{badge.name}</span>
            <span className="badge-desc">{badge.description}</span>
          </div>
        )
      })}
    </div>
  )
}
