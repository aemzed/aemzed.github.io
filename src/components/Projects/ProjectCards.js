import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({
  imgPath,
  title,
  description,
  company,
  role,
  period,
  domain,
  stack = [],
  highlights = [],
  ghLink,
  demoLink,
  language = "id",
}) {
  const [showImageModal, setShowImageModal] = useState(false);
  const isIndonesian = language === "id";

  return (
    <>
      <Card className="project-card-view">
        <button
          type="button"
          className="project-cover-trigger"
          onClick={() => setShowImageModal(true)}
          aria-label={
            isIndonesian
              ? `Buka pratinjau gambar ${title}`
              : `Open ${title} image preview`
          }
        >
          <Card.Img
            variant="top"
            src={imgPath}
            alt={title}
            className="project-cover-img"
          />
          <span className="project-cover-hint">
            {isIndonesian ? "Klik untuk perbesar" : "Click to enlarge"}
          </span>
        </button>
        <Card.Body className="project-card-body">
          <div className="project-meta-row">
            <span className="project-domain-badge">{domain}</span>
            <span className="project-period">{period}</span>
          </div>

          <Card.Title className="project-title">{title}</Card.Title>
          <p className="project-company-line">{company}</p>
          <p className="project-role-line">{role}</p>

          <div className="project-detail-block">
            <p className="project-section-label">Overview</p>
            <Card.Text className="project-description">{description}</Card.Text>
          </div>

          {highlights.length > 0 && (
            <div className="project-detail-block">
              <p className="project-section-label">Highlights</p>
              <ul className="project-highlight-list">
                {highlights.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {stack.length > 0 && (
            <div className="project-detail-block">
              <p className="project-section-label">Tech Stack</p>
              <div className="project-stack-wrap">
                {stack.map((item) => (
                  <span className="project-stack-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="project-action-row">
            {ghLink ? (
              <Button variant="primary" href={ghLink} target="_blank" rel="noreferrer">
                <BsGithub /> &nbsp;Source
              </Button>
            ) : (
              <Button variant="secondary" disabled>
                {isIndonesian ? "Project Private" : "Private Project"}
              </Button>
            )}

            {demoLink && (
              <Button variant="primary" href={demoLink} target="_blank" rel="noreferrer">
                <CgWebsite /> &nbsp;Live
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      <Modal
        show={showImageModal}
        onHide={() => setShowImageModal(false)}
        centered
        dialogClassName="project-image-modal-dialog"
        contentClassName="project-image-modal-content"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="project-image-modal-body">
          <img src={imgPath} alt={title} className="project-image-modal-preview" />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCards;
