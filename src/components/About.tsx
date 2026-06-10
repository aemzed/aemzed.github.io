import { personalInfo, stats, services } from '../data/portfolioData'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="blur-orb blue" style={{ top: '60px', left: '-100px', opacity: 0.3 }} />
      <div className="dots bottom-right" />

      <div className="section-inner">
        <div className="section-kicker">About Me</div>

        <div className="about-grid">
          {/* Left */}
          <div className="about-text">
            <h2 className="section-title">
              Crafting Digital<br />
              <span className="gradient-text">Experiences</span>
              <span className="dot">.</span>
            </h2>
            <p>{personalInfo.bio}</p>
            <p>
              I specialize in building enterprise-grade systems, mobile applications,
              and backend services with clean architecture and reliable performance.
              Passionate about turning complex problems into elegant solutions.
            </p>

            <div className="stats-grid">
              {stats.map(s => (
                <div key={s.label} className="stat-card">
                  <span className="stat-number">{s.number}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — code card */}
          <div className="about-visual">
            <div className="about-code-block">
              <div className="code-editor-line"><span className="line-num">1</span>&nbsp;<span className="code-kw">const</span>&nbsp;<span className="code-var">about</span>&nbsp;<span className="code-bracket">= &#123;</span></div>
              <div className="code-editor-line"><span className="line-num">2</span>&nbsp;&nbsp;<span className="code-prop">name</span><span className="code-bracket">:</span>&nbsp;<span className="code-str">"Aditya M. Zunaidi"</span><span className="code-bracket">,</span></div>
              <div className="code-editor-line"><span className="line-num">3</span>&nbsp;&nbsp;<span className="code-prop">base</span><span className="code-bracket">:</span>&nbsp;<span className="code-str">"Surabaya, Indonesia"</span><span className="code-bracket">,</span></div>
              <div className="code-editor-line"><span className="line-num">4</span>&nbsp;&nbsp;<span className="code-prop">experience</span><span className="code-bracket">:</span>&nbsp;<span className="code-str">"3+ Years"</span><span className="code-bracket">,</span></div>
              <div className="code-editor-line"><span className="line-num">5</span>&nbsp;&nbsp;<span className="code-prop">focus</span><span className="code-bracket">: [</span></div>
              <div className="code-editor-line"><span className="line-num">6</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"Web"</span><span className="code-bracket">,</span>&nbsp;<span className="code-str">"Mobile"</span><span className="code-bracket">,</span></div>
              <div className="code-editor-line"><span className="line-num">7</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"Backend"</span><span className="code-bracket">,</span>&nbsp;<span className="code-str">"Enterprise"</span></div>
              <div className="code-editor-line"><span className="line-num">8</span>&nbsp;&nbsp;<span className="code-bracket">],</span></div>
              <div className="code-editor-line"><span className="line-num">9</span>&nbsp;&nbsp;<span className="code-prop">values</span><span className="code-bracket">: [</span></div>
              <div className="code-editor-line"><span className="line-num">10</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"Clean Code"</span><span className="code-bracket">,</span></div>
              <div className="code-editor-line"><span className="line-num">11</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"Scalability"</span><span className="code-bracket">,</span></div>
              <div className="code-editor-line"><span className="line-num">12</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"Performance"</span></div>
              <div className="code-editor-line"><span className="line-num">13</span>&nbsp;&nbsp;<span className="code-bracket">],</span></div>
              <div className="code-editor-line"><span className="line-num">14</span>&nbsp;&nbsp;<span className="code-prop">learning</span><span className="code-bracket">:</span>&nbsp;<span className="code-bool">true</span></div>
              <div className="code-editor-line"><span className="line-num">15</span><span className="code-bracket">&#125;</span></div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <div style={{ marginBottom: '18px' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              What I Do
            </span>
          </div>
          <div className="service-grid">
            {services.map(s => (
              <div key={s.label} className="service-card">
                <span className="service-icon">{s.icon}</span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <span className="page-number">02 / 10</span>
    </section>
  )
}
