import { experiences } from '../data/portfolioData'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="blur-orb blue" style={{ top: '100px', left: '-80px', opacity: 0.25 }} />

      <div className="section-inner">
        <div className="section-kicker">Work History</div>
        <h2 className="section-title">
          Experience<span className="dot">.</span>
        </h2>
        <p className="section-subtitle">
          Professional journey building real-world systems across industries.
        </p>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.role}</h3>
                  <span className="timeline-date">{exp.period}</span>
                </div>
                <div className="timeline-company">{exp.company}</div>
                <ul className="timeline-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div className="tag-list">
                  {exp.techStack.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <span className="page-number">06 / 10</span>
    </section>
  )
}
