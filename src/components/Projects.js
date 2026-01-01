import React, { useState } from "react";
import "./Projects.css";

// images
import img1 from "../assets/Banks_states.jpg";
import img2 from "../assets/Home.png";
import img3 from "../assets/Merchant.jpg";
import img4 from "../assets/Time_trends.jpg";
import img5 from "../assets/Transactions.jpg";

const projects = [
  {
    id: 1,
    title: "UPI Payment Analysis Dashboard",
    description:
      "Multi-page Power BI dashboard analyzing UPI transactions, banks performance, state-wise trends, merchant activity and growth patterns.",
    tech: ["Power BI", "DAX", "Excel"],
    images: [img1, img2, img3, img4, img5],
    github: "https://github.com/Aasu15-ops",
  },
  {
    id: 2,
    title: "UPI Transactions Data Analysis (Python)",
    description:
      "EDA on UPI transactions to uncover trends across banks, states, merchants and time.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/Aasu15-ops",
  },
];

const Projects = () => {
  return (
    <section className="projects" id = "projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p) =>
          p.id === 1 ? (
            <ManualSliderProject key={p.id} project={p} />
          ) : (
            <NormalProject key={p.id} project={p} />
          )
        )}
      </div>
    </section>
  );
};

/* ---------- PROJECT 1 : MANUAL SLIDER + MODAL SLIDER ---------- */
const ManualSliderProject = ({ project }) => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const prev = () => {
    setIndex(index === 0 ? project.images.length - 1 : index - 1);
  };

  const next = () => {
    setIndex(index === project.images.length - 1 ? 0 : index + 1);
  };

  return (
    <>
      <div className="project-card">
        <div className="slider-wrapper">
          <button className="nav-btn left" onClick={prev}>❮</button>

          <img
            src={project.images[index]}
            alt={project.title}
            className="project-img clickable"
            onClick={() => setOpen(true)}
          />

          <button className="nav-btn right" onClick={next}>❯</button>
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tech">
          {project.tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="github-btn"
        >
          View on GitHub
        </a>
      </div>

      {/* 🔍 MODAL WITH SLIDER BUTTONS */}
      {open && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>

            <button className="modal-nav left" onClick={prev}>❮</button>

            <img
              src={project.images[index]}
              alt="Full view"
              className="modal-img"
            />

            <button className="modal-nav right" onClick={next}>❯</button>
          </div>
        </div>
      )}
    </>
  );
};

/* ---------- PROJECT 2 : SIMPLE ---------- */
const NormalProject = ({ project }) => (
  <div className="project-card">
    <h3>{project.title}</h3>
    <p>{project.description}</p>

    <div className="tech">
      {project.tech.map((t, i) => (
        <span key={i}>{t}</span>
      ))}
    </div>

    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="github-btn"
    >
      View on GitHub
    </a>
  </div>
);

export default Projects;
