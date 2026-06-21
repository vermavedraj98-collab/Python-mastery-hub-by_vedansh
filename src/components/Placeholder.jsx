import { Link } from 'react-router-dom'

export default function Placeholder({ title, message, actionTo, actionLabel }) {
  return (
    <div className="placeholder">
      <div className="placeholder-icon" aria-hidden="true">
        🧭
      </div>
      <h2>{title}</h2>
      <p>{message}</p>
      {actionTo && (
        <Link to={actionTo} className="btn btn-primary">
          {actionLabel}
        </Link>
      )}
    </div>
  )
}
