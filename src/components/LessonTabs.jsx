import { useState } from 'react'
import CodeBlock from './CodeBlock.jsx'
import QuizWidget from './QuizWidget.jsx'
import { useProgress } from '../context/ProgressContext.jsx'

const TABS = [
  { key: 'definition', label: 'Definition' },
  { key: 'easyExplanation', label: 'Explained Simply' },
  { key: 'analogy', label: 'Analogy' },
  { key: 'syntax', label: 'Syntax' },
  { key: 'example', label: 'Example' },
  { key: 'output', label: 'Output' },
  { key: 'commonErrors', label: 'Common Errors' },
  { key: 'practice', label: 'Practice' },
  { key: 'quiz', label: 'Quiz' },
  { key: 'summary', label: 'Summary' },
  { key: 'notes', label: 'My Notes' },
]

export default function LessonTabs({ lesson, moduleId }) {
  const [activeTab, setActiveTab] = useState('definition')
  const { progress, setNote } = useProgress()
  const noteValue = progress.notes[moduleId] || ''

  return (
    <div className="lesson-tabs">
      <div className="lesson-tabs-strip" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={activeTab === tab.key}
            className={`lesson-tab ${activeTab === tab.key ? 'is-active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="lesson-tab-panel">
        {activeTab === 'definition' && <p className="lesson-text">{lesson.definition}</p>}
        {activeTab === 'easyExplanation' && <p className="lesson-text">{lesson.easyExplanation}</p>}
        {activeTab === 'analogy' && <p className="lesson-text lesson-analogy">{lesson.analogy}</p>}
        {activeTab === 'syntax' && <CodeBlock code={lesson.syntax} label="Syntax" />}
        {activeTab === 'example' && <CodeBlock code={lesson.example.code} label="Example Code" />}
        {activeTab === 'output' && <CodeBlock code={lesson.output} label="Output" />}

        {activeTab === 'commonErrors' && (
          <div className="error-list">
            {lesson.commonErrors.map((err, i) => (
              <div className="error-card" key={i}>
                <p className="error-name">{err.error}</p>
                <p>
                  <span className="error-tag">Why:</span> {err.why}
                </p>
                <p>
                  <span className="error-tag">Fix:</span> {err.fix}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'practice' && (
          <ol className="practice-list">
            {lesson.practice.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ol>
        )}

        {activeTab === 'quiz' && <QuizWidget quiz={lesson.quiz} />}
        {activeTab === 'summary' && <p className="lesson-text">{lesson.summary}</p>}

        {activeTab === 'notes' && (
          <div className="notes-panel">
            <textarea
              value={noteValue}
              onChange={(e) => setNote(moduleId, e.target.value)}
              placeholder="Jot your own notes about this lesson — they're saved automatically."
              rows={8}
            />
          </div>
        )}
      </div>
    </div>
  )
}
