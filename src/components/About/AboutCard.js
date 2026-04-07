import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard({ language = "id" }) {
  const isIndonesian = language === "id";

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {isIndonesian ? (
            <p style={{ textAlign: "justify" }}>
              Halo, saya <span className="purple">Aditya Zunaidi </span>
              dari <span className="purple">Surabaya, Indonesia.</span>
              <br />
              Saat ini saya bekerja sebagai Software Engineer di ILCS (member of
              Pelindo Group).
              <br />
              Saya menyelesaikan pendidikan Diploma Sistem Informasi di
              Universitas Airlangga.
              <br />
              Saya menikmati proses membangun solusi digital yang andal,
              efisien, dan relevan dengan kebutuhan bisnis.
              <br />
              <br />
              Di luar pekerjaan, saya juga menyukai beberapa aktivitas berikut:
            </p>
          ) : (
            <p style={{ textAlign: "justify" }}>
              Hello, I am <span className="purple">Aditya Zunaidi </span>
              from <span className="purple">Surabaya, Indonesia.</span>
              <br />
              I currently work as a Software Engineer at ILCS (member of Pelindo
              Group).
              <br />
              I completed a Diploma in Information Systems at Universitas
              Airlangga.
              <br />
              I enjoy building digital solutions that are reliable, efficient,
              and aligned with business needs.
              <br />
              <br />
              Outside of work, I also enjoy these activities:
            </p>
          )}
          <ul>
            <li className="about-activity">
              <ImPointRight />{" "}
              {isIndonesian
                ? "Belajar teknologi baru dan best practice"
                : "Learning new technologies and best practices"}
            </li>
            <li className="about-activity">
              <ImPointRight />{" "}
              {isIndonesian
                ? "Membaca jurnal dan novel"
                : "Reading journals and novels"}
            </li>
            <li className="about-activity">
              <ImPointRight /> {isIndonesian ? "Travelling" : "Travelling"}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {isIndonesian
              ? '"Terus belajar, bekerja konsisten, dan memberi dampak nyata lewat solusi yang sederhana."'
              : '"Keep learning, stay consistent, and create real impact through practical solutions."'}
          </p>
          <footer className="blockquote-footer">Aditya Zunaidi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
