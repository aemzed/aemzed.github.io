import { toolCategories } from '../data/portfolioData'

export default function Tools() {
  return (
    <section className="section" id="tools">
      <div className="blur-orb blue" style={{ bottom: '40px', left: '-80px', opacity: 0.25 }} />

      <div className="section-inner">
        <div className="section-kicker">Tech Stack</div>
        <h2 className="section-title">
          Technologies <span className="gradient-text">&</span> Tools
        </h2>
        <p className="section-subtitle">
          Tools and technologies I use across web, mobile, backend, and DevOps workflows.
        </p>

        <div className="tools-grid">
          {/* Left — grouped categories */}
          <div className="tool-stack">
            {toolCategories.map(cat => (
              <div key={cat.title} className="tool-category">
                <div className="tool-category-title">{cat.title}</div>
                <div className="tool-icons">
                  {cat.tools.map(tool => (
                    <span key={tool} className="tool-chip">{tool}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right — code card */}
          <div className="code-card">
            <div className="code-card-header">
              <span className="code-card-title">engineer.ts</span>
              <div className="code-card-dots">
                <span className="code-card-dot red" />
                <span className="code-card-dot yellow" />
                <span className="code-card-dot green" />
              </div>
            </div>
            <pre>{`const engineer = {
  name: "Aditya",
  role: "FullStack Developer",
  focus: [
    "Clean Code",
    "Scalability",
    "Performance",
  ],
  stack: [
    "React",
    "TypeScript",
    ".NET",
    "Flutter",
  ],
  alwaysLearning: true,
}`}</pre>
          </div>
        </div>
      </div>

      <span className="page-number">04 / 10</span>
    </section>
  )
}
