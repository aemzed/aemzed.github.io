export default function ThankYou() {
  const scrollToTop = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section thankyou-section" id="thankyou">
      <div className="blur-orb blue" style={{ top: '60px', left: '50%', transform: 'translateX(-50%)', opacity: 0.25 }} />

      <div className="section-inner">
        <div className="thankyou-content">
          <div className="thankyou-icon">&lt;/&gt;</div>

          <h2 className="thankyou-title">Thank You!</h2>

          <p className="thankyou-text">
            Thanks for visiting my portfolio. Let's build something reliable,
            scalable, and impactful together.
          </p>

          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={scrollToTop}>
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>

      <div className="neon-wave" />

      <span className="page-number">10 / 10</span>
    </section>
  )
}
