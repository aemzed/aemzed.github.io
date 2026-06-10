import {
  SiJavascript, SiTypescript, SiPhp, SiDart,
  SiMysql, SiDotnet, SiReact, SiFlutter, SiNodedotjs,
  SiDocker, SiGit, SiSharp
} from 'react-icons/si'
import { FaJava, FaProjectDiagram } from 'react-icons/fa'
import { MdOutlineSpeed } from 'react-icons/md'
import { skills } from '../data/portfolioData'
import type { ReactElement } from 'react'

const iconMap: Record<string, ReactElement> = {
  js: <SiJavascript />,
  ts: <SiTypescript />,
  php: <SiPhp />,
  dart: <SiDart />,
  java: <FaJava />,
  csharp: <SiSharp />,
  sql: <SiMysql />,
  dotnet: <SiDotnet />,
  react: <SiReact />,
  flutter: <SiFlutter />,
  node: <SiNodedotjs />,
  docker: <SiDocker />,
  git: <SiGit />,
  api: <FaProjectDiagram />,
  agile: <MdOutlineSpeed />,
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="blur-orb purple" style={{ top: '80px', right: '-60px', opacity: 0.3 }} />
      <div className="dots top-right" />

      <div className="section-inner">
        <div className="section-kicker">Core Skills</div>
        <h2 className="section-title">
          Skills <span className="dot">&</span> Languages
        </h2>
        <p className="section-subtitle">
          Programming languages and core skills I use to build reliable applications.
        </p>

        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.name} className="skill-card">
              <div className="skill-icon">
                {iconMap[skill.iconKey] ?? <span>{skill.name[0]}</span>}
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <span className="page-number">03 / 10</span>
    </section>
  )
}
