import { useEffect, useState } from 'react';
import logo from './assets/logo-amz.png';
import { COPY, type Lang } from './copy';
import { EMAIL, PHONE, RESUME, STACK_MARQUEE } from './data';
import { About, CaseStudy, Certifications, Process, Work } from './sections';
import './scene';

const KEY = 'amz-portfolio-lang';

// ponytail: <yard-scene> is a custom element from scene.js — one declaration
// beats wrapping a 130-line three.js scene in a React component.
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'yard-scene': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

function readLang(): Lang {
  try {
    return localStorage.getItem(KEY) === 'ID' ? 'ID' : 'EN';
  } catch {
    return 'EN';
  }
}

export default function App() {
  const [lang, setLang] = useState<Lang>(readLang);
  const t = COPY[lang];

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();
    try { localStorage.setItem(KEY, lang); } catch { /* private mode */ }
  }, [lang]);

  return (
    <>
      <yard-scene />
      <div className="vignette" />

      <div className="page">
        <nav className="nav mono">
          <a className="brand" href="#top">
            <img className="monogram" src={logo} alt="AMZ monogram" />
            <span>A.M. Zunaidi</span>
          </a>
          <div className="nav-links">
            <a href="#work">{t.navWork}</a>
            <a href="#case">{t.navCase}</a>
            <a href="#about">{t.navAbout}</a>
            <a href="#contact">{t.navContact}</a>
            <div className="lang">
              {(['EN', 'ID'] as Lang[]).map((l) => (
                <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>{l}</button>
              ))}
            </div>
            <a className="btn btn-sm" href={RESUME} download>{t.resume} ↓</a>
          </div>
        </nav>

        <header className="hero" id="top">
          <div className="kicker mono">{t.kicker}</div>
          <h1>Aditya Maulana<br />Zunaidi</h1>
          <div className="hero-foot">
            <p>{t.heroSub}</p>
            <div className="hero-cta">
              <a className="btn btn-solid" href="#work">{t.ctaEnter}</a>
              <a className="btn btn-ghost" href="#contact">{t.ctaHire}</a>
            </div>
          </div>
          <div className="scroll-hint mono">{t.scroll} ↓</div>
        </header>

        <div className="marquee">
          <div className="marquee-track mono">
            {/* doubled so the -50% keyframe loops seamlessly */}
            {[0, 1].map((pass) => STACK_MARQUEE.map((s) => (
              <span key={`${pass}-${s}`}>{s}<i>◆</i></span>
            )))}
          </div>
        </div>

        <Work t={t} />
        <CaseStudy t={t} />
        <Process t={t} />
        <About t={t} />
        <Certifications t={t} />

        <section id="contact">
          <div className="wrap">
            <div className="rule mono" style={{ marginBottom: 0 }}>
              <span>06 / <b>{t.secContact}</b></span><i />
            </div>
            <h2>{t.contactTitle1}<br />{t.contactTitle2}</h2>
            <div className="contact-links mono">
              <a className="btn btn-solid" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a className="btn btn-ghost" href={`tel:${PHONE.replace(/[^+\d]/g, '')}`}>{PHONE}</a>
              <a className="btn btn-ghost" href={RESUME} download>{t.downloadResume} ↓</a>
            </div>
            <img className="sign" src={logo} alt="AMZ monogram" />
            <div className="colophon mono">
              <span>SURABAYA, INDONESIA · GMT+7</span>
              <span>ADITYA MAULANA ZUNAIDI © 2026</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
