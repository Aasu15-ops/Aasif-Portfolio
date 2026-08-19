import React from "react";
import "./Banner.css";
import profile from "../assets/aasifdp.jpeg";

function Banner() {
  return (
    <section className="banner" id="home">
      
      {/* LEFT CONTENT */}
      <div className="banner-text">
        <span className="badge">DATA ANALYST</span>

        <h1>
          Hi, I’m <span>Aasif Ansari</span>
        </h1>

        <h2>Data Analyst | MIS Executive</h2>

        <p>
          I help businesses make data-driven decisions
          using Excel, SQL, Power BI, Tableau & Python.
        </p>

        <div className="banner-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="/MD_Aasif_Ansari_Resume_ds.pdf" className="btn outline" download>
            Download Resume
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="banner-image">
        <img src={profile} alt="Aasif Ansari" />
      </div>

    </section>
  );
}

export default Banner;

