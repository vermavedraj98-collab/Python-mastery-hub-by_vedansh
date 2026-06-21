import { useParams, Link } from 'react-router-dom'
import { getModule, TIERS } from '../data/modules.js'
import { getLesson } from '../data/lessons.js'
import { useProgress } from '../context/ProgressContext.jsx'
import LessonTabs from '../components/LessonTabs.jsx'
import TierIcon from '../components/TierIcon.jsx'
import Placeholder from '../components/Placeholder.jsx'

function LessonBreadcrumb({ module, tier }) {
  return (
    <p className="breadcrumb">
      <Link to="/roadmap">Trail Map</Link> / <span>{tier.label}</span> / <span>#{module.id}</span>
    </p>
  )
}

export default function Lesson() {
  const { id } = useParams()
  const moduleId = Number(id)
  const module = getModule(moduleId)
  const lesson = getLesson(moduleId)
  const { progress, toggleComplete, toggleBookmark } = useProgress()

  if (!module) {
    return (
      <div className="page">
        <Placeholder
          title="Waypoint not found"
          message="That module number doesn't exist on the trail."
          actionTo="/roadmap"
          actionLabel="Back to the Trail Map"
        />
      </div>
    )
  }

  const tier = TIERS[module.tier]
  const isCompleted = progress.completedModules.includes(moduleId)
  const isBookmarked = progress.bookmarks.includes(moduleId)

  if (!lesson) {
    return (
      <div className="page lesson-page">
        <LessonBreadcrumb module={module} tier={tier} />
        <Placeholder
          title={`#${moduleId} — ${module.title}`}
          message="This waypoint hasn't been charted yet. The curriculum slot is reserved — full lesson content is coming in a future build."
          actionTo="/roadmap"
          actionLabel="Back to the Trail Map"
        />
      </div>
    )
  }

  function handleCopyLesson() {
    const text = [
      `#${moduleId} ${module.title}`,
      '',
      `Definition: ${lesson.definition}`,
      '',
      `Explained Simply: ${lesson.easyExplanation}`,
      '',
      `Analogy: ${lesson.analogy}`,
      '',
      `Syntax:\n${lesson.syntax}`,
      '',
      `Example:\n${lesson.example.code}`,
      '',
      `Output:\n${lesson.output}`,
      '',
      `Summary: ${lesson.summary}`,
    ].join('\n')
    navigator.clipboard?.writeText(text)
  }

  return (
    <div className="page lesson-page">
      <LessonBreadcrumb module={module} tier={tier} />

      <div className="lesson-header">
        <div>
          <span className={`tier-pill tier-${tier.key}`}>{tier.label}</span>
          <h1>
            #{String(moduleId).padStart(3, '0')} — {module.title}
          </h1>
        </div>
        <div className="lesson-actions">
          <button
            className={`icon-btn ${isBookmarked ? 'is-active' : ''}`}
            onClick={() => toggleBookmark(moduleId)}
            type="button"
            aria-label="Bookmark this lesson"
          >
            <TierIcon type="bookmark" size={18} />
          </button>
          <button className="icon-btn" onClick={handleCopyLesson} type="button">
            Copy Lesson
          </button>
          <button
            className={`btn ${isCompleted ? 'btn-secondary' : 'btn-primary'}`}
            onClick={() => toggleComplete(moduleId)}
            type="button"
          >
            {isCompleted ? '✓ Completed' : 'Mark Complete (+50 XP)'}
          </button>
        </div>
      </div>

      <LessonTabs lesson={lesson} moduleId={moduleId} />

      <div className="lesson-nav">
        {moduleId > 1 ? (
          <Link to={`/lesson/${moduleId - 1}`} className="btn btn-ghost">
            ← Previous Module
          </Link>
        ) : (
          <span />
        )}
        {moduleId < 100 && (
          <Link to={`/lesson/${moduleId + 1}`} className="btn btn-ghost">
            Next Module →
          </Link>
        )}
      </div>

      <p className="creator-credit">
        Created by Vedansh Verma — Class 11 Commerce with Informatics Practices (IP) Student
      </p>
    </div>
  )
}
