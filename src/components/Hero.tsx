import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  return (
    <section className="section" id="home">
      <div className="dots top-right" />
      <div className="blur-orb blue" style={{ top: '-80px', right: '-60px' }} />
      <div className="blur-orb purple" style={{ bottom: '40px', left: '-80px' }} />

      <div className="section-inner">
        <div className="hero-grid">
          {/* Left */}
          <div className="hero-left">
            <div className="hero-badge">Available for new opportunities</div>

            <h1 className="hero-title">
              <small>Hi, I'm</small>
              <span className="gradient-text">FullStack</span>
              <br />
              <span>Developer</span>
            </h1>

            <p className="hero-text">
              I build scalable web, mobile, backend, and enterprise integration systems
              with clean architecture and reliable performance.
            </p>

            <div className="btn-group">
              <a
                className="btn btn-primary"
                href="#projects"
                onClick={e => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                View My Work
              </a>
              <a className="btn btn-outline" href="/cv.pdf" download>
                Download CV
              </a>
            </div>

            <div className="hero-socials">
              <a className="social-link" href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a className="social-link" href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a className="social-link" href={`mailto:${personalInfo.email}`} aria-label="Email">
                <FiMail />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="hero-visual">
            <div className="floating-tech one">&lt;/&gt;</div>
            <div className="floating-tech two">&#123; &#125;</div>
            <div className="floating-tech three">&gt;_</div>

            <div className="laptop-mockup">
              <div className="laptop-topbar">
                <span className="laptop-dot red" />
                <span className="laptop-dot yellow" />
                <span className="laptop-dot green" />
                <span className="laptop-topbar-title">portfolio.tsx</span>
              </div>
              <div className="laptop-screen">
                <div className="code-editor-line"><span className="line-num">1</span><span className="code-kw">const</span>&nbsp;<span className="code-var">developer</span>&nbsp;<span className="code-bracket">= &#123;</span></div>
                <div className="code-editor-line"><span className="line-num">2</span>&nbsp;&nbsp;<span className="code-prop">name</span><span className="code-bracket">:</span>&nbsp;<span className="code-str">"Aditya Zunaidi"</span><span className="code-bracket">,</span></div>
                <div className="code-editor-line"><span className="line-num">3</span>&nbsp;&nbsp;<span className="code-prop">role</span><span className="code-bracket">:</span>&nbsp;<span className="code-str">"FullStack Developer"</span><span className="code-bracket">,</span></div>
                <div className="code-editor-line"><span className="line-num">4</span>&nbsp;&nbsp;<span className="code-prop">stack</span><span className="code-bracket">: [</span></div>
                <div className="code-editor-line"><span className="line-num">5</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"React"</span><span className="code-bracket">,</span>&nbsp;<span className="code-str">"TypeScript"</span><span className="code-bracket">,</span></div>
                <div className="code-editor-line"><span className="line-num">6</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">".NET"</span><span className="code-bracket">,</span>&nbsp;<span className="code-str">"Flutter"</span><span className="code-bracket">,</span></div>
                <div className="code-editor-line"><span className="line-num">7</span>&nbsp;&nbsp;<span className="code-bracket">],</span></div>
                <div className="code-editor-line"><span className="line-num">8</span>&nbsp;&nbsp;<span className="code-prop">location</span><span className="code-bracket">:</span>&nbsp;<span className="code-str">"Surabaya, ID"</span><span className="code-bracket">,</span></div>
                <div className="code-editor-line"><span className="line-num">9</span>&nbsp;&nbsp;<span className="code-prop">open</span><span className="code-bracket">:</span>&nbsp;<span className="code-bool">true</span></div>
                <div className="code-editor-line"><span className="line-num">10</span><span className="code-bracket">&#125;</span></div>
                <br />
                <div className="code-editor-line"><span className="line-num">12</span><span className="code-comment">// Building things that scale</span></div>
              </div>
            </div>

            <div className="mini-stat top">
              <strong>15+</strong>
              <span>Projects Completed</span>
            </div>
            <div className="mini-stat bottom">
              <strong>3+</strong>
              <span>Backend • Mobile • Web</span>
            </div>
          </div>
        </div>
      </div>

      <span className="page-number">01 / 10</span>
    </section>
  )
}
