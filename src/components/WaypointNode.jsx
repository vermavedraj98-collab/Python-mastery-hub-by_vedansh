import { Link } from 'react-router-dom'
import TierIcon from './TierIcon.jsx'

export default function WaypointNode({ module, isCompleted, isBookmarked, hasContent }) {
  return (
    <Link
      to={`/lesson/${module.id}`}
      className={`waypoint tier-${module.tier} ${hasContent ? 'is-charted' : 'is-uncharted'} ${
        isCompleted ? 'is-completed' : ''
      }`}
      title={`#${module.id} ${module.title}${hasContent ? '' : ' — not charted yet'}`}
    >
      <span className="waypoint-marker">
        {isCompleted ? (
          <TierIcon type="check" size={14} />
        ) : hasContent ? (
          <span className="waypoint-id">{module.id}</span>
        ) : (
          <TierIcon type="lock" size={12} />
        )}
      </span>
      {isBookmarked && (
        <span className="waypoint-bookmark">
          <TierIcon type="bookmark" size={12} />
        </span>
      )}
      <span className="waypoint-label">{module.title}</span>
    </Link>
  )
}
