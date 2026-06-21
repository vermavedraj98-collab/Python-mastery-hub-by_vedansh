import { TIERS, modulesByTier } from '../data/modules.js'
import { PUBLISHED_IDS } from '../data/lessons.js'
import { useProgress } from '../context/ProgressContext.jsx'
import WaypointNode from '../components/WaypointNode.jsx'
import TierIcon from '../components/TierIcon.jsx'

export default function Roadmap() {
  const { progress } = useProgress()

  return (
    <div className="page roadmap-page">
      <h1>The Trail Map</h1>
      <p className="page-intro">
        100 waypoints across three roadmaps. Solid, numbered markers are charted and ready to
        walk — dimmed markers with a lock haven't been mapped yet.
      </p>

      {Object.values(TIERS).map((tier) => {
        const mods = modulesByTier(tier.key)
        return (
          <section className="trail-section" key={tier.key}>
            <div className="trail-section-header">
              <TierIcon type={tier.key} size={24} />
              <div>
                <h2>{tier.label}</h2>
                <p>
                  {tier.subtitle} · Modules {tier.range[0]}–{tier.range[1]}
                </p>
              </div>
            </div>
            <div className="trail-row">
              {mods.map((m) => (
                <WaypointNode
                  key={m.id}
                  module={m}
                  hasContent={PUBLISHED_IDS.includes(m.id)}
                  isCompleted={progress.completedModules.includes(m.id)}
                  isBookmarked={progress.bookmarks.includes(m.id)}
                />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
