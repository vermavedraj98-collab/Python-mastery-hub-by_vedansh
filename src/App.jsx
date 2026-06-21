import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import ContourBackground from './components/ContourBackground.jsx'
import Placeholder from './components/Placeholder.jsx'
import Home from './pages/Home.jsx'
import Roadmap from './pages/Roadmap.jsx'
import Lesson from './pages/Lesson.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Certificate from './pages/Certificate.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <ContourBackground />
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/lesson/:id" element={<Lesson />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route
            path="/glossary"
            element={
              <div className="page">
                <Placeholder
                  title="Python Dictionary"
                  message="A searchable glossary of Python terms is on the roadmap for the next build phase."
                  actionTo="/roadmap"
                  actionLabel="Back to the Trail Map"
                />
              </div>
            }
          />
          <Route
            path="/error-handbook"
            element={
              <div className="page">
                <Placeholder
                  title="Error Handbook"
                  message="A full field guide to Python error messages is coming in a future build."
                  actionTo="/roadmap"
                  actionLabel="Back to the Trail Map"
                />
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className="page">
                <Placeholder
                  title="Off the trail"
                  message="That page doesn't exist."
                  actionTo="/"
                  actionLabel="Back to Home"
                />
              </div>
            }
          />
        </Routes>
      </main>
      <footer className="app-footer">
        <p>Python Mastery Hub — built module by module, from Basecamp to Summit.</p>
        <p className="creator-credit">
          Created by Vedansh Verma — Class 11 Commerce with Informatics Practices (IP) Student
        </p>
      </footer>
    </div>
  )
}
