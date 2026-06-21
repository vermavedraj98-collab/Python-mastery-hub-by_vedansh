import { Link } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext.jsx'
import { PUBLISHED_IDS } from '../data/lessons.js'
import Placeholder from '../components/Placeholder.jsx'

export default function Certificate() {
  const { progress } = useProgress()
  const allDone =
    PUBLISHED_IDS.length > 0 && PUBLISHED_IDS.every((id) => progress.completedModules.includes(id))

  if (!allDone) {
    return (
      <div className="page">
        <Placeholder
          title="Certificate locked"
          message="Complete every published lesson to unlock your certificate."
          actionTo="/roadmap"
          actionLabel="Keep Walking the Trail"
        />
      </div>
    )
  }

  const today = new Date().toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="page certificate-page">
      <div className="certificate">
        <p className="certificate-eyebrow">Python Mastery Hub</p>
        <h1>Certificate of Completion</h1>
        <p className="certificate-sub">This certifies that</p>
        <p className="certificate-name">{progress.name || 'A Python Trailblazer'}</p>
        <p className="certificate-sub">
          has completed the published curriculum, mastering {PUBLISHED_IDS.length} modules of
          Python fundamentals.
        </p>
        <p className="certificate-date">{today}</p>
        <p className="certificate-signature">Vedansh Verma · Creator, Python Mastery Hub</p>
      </div>
      <div className="certificate-actions">
        <button className="btn btn-primary" onClick={() => window.print()} type="button">
          Print / Save as PDF
        </button>
        <Link to="/dashboard" className="btn btn-ghost">
          Back to Dashboard
        </Link>
      </div>
    </div>
  )
}
