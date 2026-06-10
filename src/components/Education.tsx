import { educations, coursework } from '../data/portfolioData'

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="blur-orb purple" style={{ bottom: '60px', right: '-80px', opacity: 0.28 }} />
      <div className="dots top-right" />

      <div className="section-inner">
        <div className="section-kicker">Academic Background</div>
        <h2 className="section-title">
          Education<span className="dot">.</span>
        </h2>
        <p className="section-subtitle">
          Academic foundation in Information Systems that shapes how I approach software engineering.
        </p>

        <div className="education-grid">
          {/* Left — education cards */}
          <div className="education-cards">
            {educations.map((edu, i) => (
              <div key={i} className="education-card">
                <div className="education-year">{edu.year}</div>
                <h3 className="education-degree">{edu.degree}</h3>
                <div className="education-school">{edu.school}</div>
                <p className="education-desc">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Right — coursework */}
          <div className="coursework-block">
            <div className="coursework-title">Relevant Coursework</div>
            <div className="coursework">
              {coursework.map(c => (
                <div key={c} className="course-item">{c}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <span className="page-number">07 / 10</span>
    </section>
  )
}
