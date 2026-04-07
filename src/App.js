import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Certificate from "./components/Certificate/Certificate";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") {
      return "id";
    }
    return window.localStorage.getItem("portfolio_language") === "en"
      ? "en"
      : "id";
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("portfolio_language", language);
    }
  }, [language]);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar
          language={language}
          onToggleLanguage={() =>
            setLanguage((currentLanguage) =>
              currentLanguage === "id" ? "en" : "id",
            )
          }
        />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/project" element={<Projects language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/resume" element={<Resume language={language} />} />
          <Route
            path="/certificate"
            element={<Certificate language={language} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
