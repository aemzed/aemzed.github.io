import { useState, type FormEvent } from 'react'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    const mailto = `mailto:adityazunaidi115@gmail.com?subject=${encodeURIComponent('from portfolio')}&body=${encodeURIComponent(body)}`
    window.open(mailto)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  const contactItems = [
    { icon: <FiMail />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <FiPhone />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <FiMapPin />, label: 'Location', value: personalInfo.location, href: undefined },
    { icon: <FiGithub />, label: 'GitHub', value: 'github.com/adityazunaidi', href: personalInfo.github },
    { icon: <FiLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/adityazunaidi', href: personalInfo.linkedin },
  ]

  return (
    <section className="section" id="contact">
      <div className="blur-orb purple" style={{ bottom: '80px', right: '-80px', opacity: 0.3 }} />
      <div className="dots top-right" />

      <div className="section-inner">
        <div className="section-kicker">Get In Touch</div>
        <h2 className="section-title">
          Let's <span className="gradient-text">Connect</span>
          <span className="dot">.</span>
        </h2>
        <p className="section-subtitle">
          Have a project, opportunity, or collaboration idea? Feel free to reach out.
        </p>

        <div className="contact-grid">
          {/* Left — contact info */}
          <div>
            <div className="contact-list">
              {contactItems.map(item => (
                <div key={item.label} className="contact-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <strong>{item.label}</strong>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer">{item.value}</a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                className="form-control"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                className="form-control"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                className="form-control"
                placeholder="Hi, I'd like to discuss a project..."
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              {sent ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <span className="page-number">09 / 10</span>
    </section>
  )
}
