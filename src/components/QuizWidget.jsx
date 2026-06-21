import { useState } from 'react'

export default function QuizWidget({ quiz }) {
  const [answers, setAnswers] = useState({})

  function selectAnswer(qIndex, optIndex) {
    setAnswers((prev) => ({ ...prev, [qIndex]: optIndex }))
  }

  return (
    <div className="quiz-widget">
      {quiz.map((q, qIndex) => {
        const selected = answers[qIndex]
        const answered = selected !== undefined
        return (
          <div className="quiz-question" key={qIndex}>
            <p className="quiz-question-text">
              {qIndex + 1}. {q.question}
            </p>
            <div className="quiz-options">
              {q.options.map((opt, optIndex) => {
                let stateClass = ''
                if (answered) {
                  if (optIndex === q.correctIndex) stateClass = 'is-correct'
                  else if (optIndex === selected) stateClass = 'is-incorrect'
                }
                return (
                  <button
                    key={optIndex}
                    className={`quiz-option ${stateClass}`}
                    onClick={() => !answered && selectAnswer(qIndex, optIndex)}
                    disabled={answered}
                    type="button"
                  >
                    {opt}
                  </button>
                )
              })}
            </div>
            {answered && (
              <p className={`quiz-feedback ${selected === q.correctIndex ? 'is-correct' : 'is-incorrect'}`}>
                {selected === q.correctIndex ? '✓ Correct — ' : '✗ Not quite — '}
                {q.explanation}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
