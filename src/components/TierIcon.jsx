// Small inline SVG icons. No external icon library dependency, so the
// project has zero extra install risk for something this simple.
export default function TierIcon({ type, size = 20, className = '' }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
  }

  if (type === 'beginner') {
    return (
      <svg {...common}>
        <path d="M12 4 L20 18 H4 Z" />
        <path d="M12 4 L12 18" />
      </svg>
    )
  }

  if (type === 'intermediate') {
    return (
      <svg {...common}>
        <path d="M3 16 L8 9 L11 13 L15 7 L21 16" />
      </svg>
    )
  }

  if (type === 'advanced') {
    return (
      <svg {...common}>
        <path d="M3 18 L9 6 L13 12 L16 8 L21 18 Z" />
        <path d="M16 8 L16 4 L19 5.5 L16 7 Z" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (type === 'lock') {
    return (
      <svg {...common}>
        <rect x="5" y="11" width="14" height="9" rx="2" />
        <path d="M8 11 V8 a4 4 0 0 1 8 0 v3" />
      </svg>
    )
  }

  if (type === 'check') {
    return (
      <svg {...common}>
        <path d="M4 12 L10 18 L20 6" />
      </svg>
    )
  }

  if (type === 'bookmark') {
    return (
      <svg {...common}>
        <path d="M6 4 H18 V20 L12 16 L6 20 Z" />
      </svg>
    )
  }

  if (type === 'sun') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </svg>
    )
  }

  if (type === 'moon') {
    return (
      <svg {...common}>
        <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
      </svg>
    )
  }

  if (type === 'flag') {
    return (
      <svg {...common}>
        <path d="M6 21V4" />
        <path d="M6 4h11l-3 4 3 4H6" />
      </svg>
    )
  }

  return null
}
