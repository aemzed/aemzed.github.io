import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Tools', id: 'tools' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.35 }
    )

    sections.forEach(s => observer.observe(s))
    return () => sections.forEach(s => observer.unobserve(s))
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <button className="logo" onClick={() => scrollTo('home')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <span className="logo-icon">&lt;/&gt;</span>
          <span><strong>Aditya</strong>.dev</span>
        </button>

        <div className="nav-menu">
          {navLinks.map(link => (
            <button
              key={link.id}
              className={`nav-link${active === link.id ? ' active' : ''}`}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: 'var(--nav-height)',
          left: 0,
          right: 0,
          background: 'rgba(2,7,17,0.97)',
          backdropFilter: 'blur(18px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 99,
        }}>
          {navLinks.map(link => (
            <button
              key={link.id}
              className={`nav-link${active === link.id ? ' active' : ''}`}
              onClick={() => scrollTo(link.id)}
              style={{ textAlign: 'left' }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
