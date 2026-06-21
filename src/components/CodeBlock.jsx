import { useState } from 'react'

export default function CodeBlock({ code, label = 'Example' }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (e) {
      // Clipboard API unavailable in this context - fail silently.
    }
  }

  return (
    <div className="code-block">
      <div className="code-block-header">
        <span className="code-block-label">{label}</span>
        <button className="code-block-copy" onClick={handleCopy} type="button">
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  )
}
