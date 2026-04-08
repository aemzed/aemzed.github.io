import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import csharpBasicPdf from "../../Assets/Certificate/c_sharp_basic certificate.pdf";
import javascriptIntermediatePdf from "../../Assets/Certificate/javascript_intermediate certificate.pdf";
import problemSolvingBasicPdf from "../../Assets/Certificate/problem_solving_basic certificate.pdf";
import restApiIntermediatePdf from "../../Assets/Certificate/rest_api_intermediate certificate.pdf";
import softwareEngineerPdf from "../../Assets/Certificate/software_engineer certificate.pdf";
import sqlAdvancedPdf from "../../Assets/Certificate/sql_advanced certificate.pdf";
import frontEndReactPdf from "../../Assets/Certificate/frontend_developer_react certificate.pdf";
import nodeJsPdf from "../../Assets/Certificate/nodejs_intermediate certificate.pdf";
import problemSolvingIntermediatePdf from "../../Assets/Certificate/problem_solving_intermediate certificate.pdf";

const certificates = [
  {
    titleId: "Sertifikat Software Engineer",
    titleEn: "Software Engineer Certificate",
    file: softwareEngineerPdf,
  },
  {
    titleId: "Sertifikat C# Basic",
    titleEn: "C# Basic Certificate",
    file: csharpBasicPdf,
  },
  {
    titleId: "Sertifikat JavaScript Intermediate",
    titleEn: "JavaScript Intermediate Certificate",
    file: javascriptIntermediatePdf,
  },
  {
    titleId: "Sertifikat Problem Solving Basic",
    titleEn: "Problem Solving Basic Certificate",
    file: problemSolvingBasicPdf,
  },
  {
    titleId: "Sertifikat REST API Intermediate",
    titleEn: "REST API Intermediate Certificate",
    file: restApiIntermediatePdf,
  },
  {
    titleId: "Sertifikat SQL Advanced",
    titleEn: "SQL Advanced Certificate",
    file: sqlAdvancedPdf,
  },
  {
    titleId: "Sertifikat Front End React",
    titleEn: "Front End React Certificate",
    file: frontEndReactPdf,
  },
  {
    titleId: "Sertifikat Problem Solving Intermediate",
    titleEn: "Problem Solving Intermediate Certificate",
    file: problemSolvingIntermediatePdf,
  },
  {
    titleId: "Sertifikat Node.js Intermediate",
    titleEn: "Node.js Intermediate Certificate",
    file: nodeJsPdf,
  },
];

function Certificate({ language = "id" }) {
  const isIndonesian = language === "id";
  const [height, setHeight] = useState("860px");

  useEffect(() => {
    if (window.innerWidth <= 786) {
      setHeight("560px");
    }
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {certificates.map((certificate) => (
          <React.Fragment key={certificate.titleEn}>
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <h2
                className="project-heading"
                style={{ fontSize: "1.35rem", marginBottom: "14px" }}
              >
                <strong className="purple">
                  {isIndonesian ? certificate.titleId : certificate.titleEn}
                </strong>
              </h2>
            </Row>

            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={certificate.file}
                target="_blank"
                rel="noreferrer"
                style={{ maxWidth: "300px", marginBottom: "18px" }}
              >
                <AiOutlineSafetyCertificate />
                &nbsp;{isIndonesian ? "Buka PDF" : "Open PDF"}
              </Button>
            </Row>

            <Row className="resume" style={{ justifyContent: "center" }}>
              <iframe
                title={isIndonesian ? certificate.titleId : certificate.titleEn}
                src={certificate.file}
                loading="lazy"
                style={{
                  width: "100%",
                  maxWidth: "980px",
                  height,
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "white",
                }}
              />
            </Row>
          </React.Fragment>
        ))}
      </Container>
    </div>
  );
}

export default Certificate;
