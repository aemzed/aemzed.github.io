import { certFocus } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="blur-orb blue" style={{ top: '60px', left: '-100px', opacity: 0.25 }} />

      <div className="section-inner">
        <div className="section-kicker">Expertise</div>
        <h2 className="section-title">
          Professional <span className="gradient-text">Focus</span>
          <span className="dot">.</span>
        </h2>
        <p className="section-subtitle">
          Core areas where I deliver consistent value and maintain deep expertise.
        </p>

        <div className="cert-grid">
          {certFocus.map((cert, i) => (
            <div key={i} className="cert-card">
              <div className="cert-logo">{cert.icon}</div>
              <span className="cert-badge">{cert.subtitle}</span>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-subtitle">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>

      <span className="page-number">08 / 10</span>
    </section>
  )
}
