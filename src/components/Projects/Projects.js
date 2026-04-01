import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projects from "../../data/projects";

function Projects({ language = "id" }) {
  const isIndonesian = language === "id";
  const [selectedCompany, setSelectedCompany] = useState("All");
  const companyFilters = ["All", ...new Set(projects.map((project) => project.company))];
  const filteredProjects =
    selectedCompany === "All"
      ? projects
      : projects.filter((project) => project.company === selectedCompany);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="project-hero-panel">
          <p className="project-kicker">
            {isIndonesian ? "Sorotan Portofolio" : "Portfolio Highlights"}
          </p>
          <h1 className="project-heading">
            {isIndonesian ? (
              <>
                Pengalaman <strong className="purple">Proyek Utama</strong>
              </>
            ) : (
              <>
                Key <strong className="purple">Project Experience</strong>
              </>
            )}
          </h1>
          <p className="project-hero-description">
            {isIndonesian
              ? "Portofolio pengembangan sistem pada domain HR, produk startup, dan integrasi logistik pelabuhan enterprise."
              : "Curated delivery portfolio across HR systems, startup products, and enterprise port logistics integrations."}
          </p>

          <div className="project-quick-stats">
            <div className="project-stat-item">
              <span>{projects.length}</span>
              <p>{isIndonesian ? "Proyek" : "Projects"}</p>
            </div>
            <div className="project-stat-item">
              <span>{companyFilters.length - 1}</span>
              <p>{isIndonesian ? "Perusahaan" : "Companies"}</p>
            </div>
            <div className="project-stat-item">
              <span>{new Set(projects.map((project) => project.domain)).size}</span>
              <p>{isIndonesian ? "Domain" : "Domains"}</p>
            </div>
          </div>

          <div className="project-filter-wrap">
            {companyFilters.map((company) => (
              <button
                key={company}
                className={`project-filter-btn ${
                  selectedCompany === company ? "active" : ""
                }`}
                onClick={() => setSelectedCompany(company)}
              >
                {company === "All" && isIndonesian ? "Semua" : company}
              </button>
            ))}
          </div>
        </div>

        <Row className="project-grid">
          {filteredProjects.map((project) => (
            <Col lg={4} md={6} className="project-card" key={project.title}>
              <ProjectCard {...project} language={language} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
