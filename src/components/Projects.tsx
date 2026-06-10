import { useState } from 'react'
import { projects } from '../data/portfolioData'

const filters = ['All', 'Web', 'Mobile', 'Backend', 'Fullstack', 'Integration']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <section className="section" id="projects">
      <div className="blur-orb purple" style={{ top: '60px', right: '-100px', opacity: 0.28 }} />
      <div className="dots bottom-right" />

      <div className="section-inner">
        <div className="section-kicker">Portfolio</div>
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
          <span className="dot">.</span>
        </h2>
        <p className="section-subtitle">
          Some systems and applications I have built.
        </p>

        <div className="project-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn${active === f ? ' active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-card-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-badge">{project.category}</span>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.techStack.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <span className="page-number">05 / 10</span>
    </section>
  )
}
