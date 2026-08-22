import type { Copy } from './copy';
import { CERTS, PROJECTS, SKILLS, STEPS, TIMELINE } from './data';

type P = { t: Copy };

function Rule({ n, label }: { n: string; label: string }) {
  return (
    <div className="rule mono">
      <span>{n} / <b>{label}</b></span>
      <i />
    </div>
  );
}

export function Work({ t }: P) {
  return (
    <section id="work">
      <div className="wrap">
        <Rule n="01" label={t.secWork} />
        <h2>{t.workTitle}</h2>
        <p className="lede">{t.workIntro}</p>
        <div className="cards">
          {PROJECTS.map((p) => (
            <div className="card" key={p.title}>
              <div className="org mono">{p.org}</div>
              <h3>{p.title}</h3>
              <p>{t[p.blurb]}</p>
              <div className="stack mono">{p.stack}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudy({ t }: P) {
  return (
    <section id="case" className="panel">
      <div className="wrap">
        <Rule n="02" label={t.secCase} />
        <div className="two">
          <div>
            <h2>Portal APBS</h2>
            <p className="lede">{t.caseBody}</p>
            <div className="facts mono">
              <div><span className="k">{t.lblRole}</span><span className="v">{t.valRole}</span></div>
              <div><span className="k">{t.lblStack}</span><span className="v">ASP.NET Core 8 · Oracle</span></div>
              <div><span className="k">{t.lblIntegrations}</span><span className="v">TPS · PTOS-M · PTOS-PK · PKK · TTL</span></div>
              <div><span className="k">{t.lblYear}</span><span className="v">{t.valYear}</span></div>
            </div>
          </div>
          <div>
            <img className="shot" src="apbs-portal-crop.png" alt="Portal APBS login screen" />
            <div className="stats">
              <div><b>5</b><small className="mono">{t.stat1}</small></div>
              <div><b>8</b><small className="mono">{t.stat2}</small></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process({ t }: P) {
  return (
    <section id="process">
      <div className="wrap">
        <Rule n="03" label={t.secProcess} />
        <div className="steps">
          {STEPS.map((s, i) => (
            <div key={s.title}>
              <div className="n mono">{String(i + 1).padStart(2, '0')}</div>
              <h3>{t[s.title]}</h3>
              <p>{t[s.body]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About({ t }: P) {
  return (
    <section id="about" className="panel">
      <div className="wrap">
        <Rule n="04" label={t.secAbout} />
        <div className="two" style={{ gap: 64 }}>
          <div>
            <p className="about-lead">{t.aboutLead}</p>
            <p className="about-body">{t.aboutBody}</p>
            <div className="timeline">
              {TIMELINE.map((e) => (
                <div key={e.what}>
                  <div className="when mono">{e.from}{e.to === null ? ` — ${t.present}` : e.to ? ` — ${e.to}` : ''}</div>
                  <div className="what">{e.what}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="skills-title mono">{t.skills}</div>
            <div className="skills">
              {SKILLS.map((s) => (
                <div key={s.label}>
                  <h3>{t[s.label]}</h3>
                  <p>{s.items}</p>
                </div>
              ))}
              <div>
                <h3>{t.skEdu}</h3>
                <p>{t.edu1}<br />{t.edu2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Certifications({ t }: P) {
  return (
    <section id="certifications">
      <div className="wrap">
        <Rule n="05" label={t.secCerts} />
        <div className="certs">
          {CERTS.map((c) => (
            <div key={c.name}>
              <div className="name">{c.name}</div>
              <div className="by mono">{c.by}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
