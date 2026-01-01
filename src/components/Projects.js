import React, { useState, useEffect } from "react";
import "./Projects.css";

// Images
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
      "Multi-page Power BI dashboard analyzing UPI transactions, banks performance, state-wise trends, merchant activity and transaction growth patterns.",
    tech: ["Power BI", "DAX", "Excel"],
    images: [img1, img2, img3, img4, img5],
  },
  {
    id: 2,
    title: "UPI Transactions Data Analysis (Python)",
    description:
      "Exploratory data analysis of UPI transactions to uncover trends across transaction types, banks, states, merchants, and time periods.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/Aasu15-ops",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project) =>
          project.id === 1 ? (
            <SliderProject key={project.id} project={project} />
          ) : (
            <NormalProject key={project.id} project={project} />
          )
        )}
      </div>
    </section>
  );
};

/* ---------- PROJECT 1 (WITH SLIDER + MODAL) ---------- */
const SliderProject = ({ project }) => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(timer);
  }, [project.images.length]);

  return (
    <>
      <div className="project-card">
        <div className="slider" onClick={() => setOpen(true)}>
          <img
            src={project.images[index]}
            alt={project.title}
            className="project-img"
          />
          <div className="tap-text">Tap to enlarge</div>
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tech-stack">
          {project.tech.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
      </div>

      {/* MODAL (FULL IMAGE VIEW) */}
      {open && (
        <div className="modal" onClick={() => setOpen(false)}>
          <img
            src={project.images[index]}
            alt="full-view"
            className="modal-img"
          />
        </div>
      )}
    </>
  );
};

/* ---------- PROJECT 2 (NORMAL CARD) ---------- */
const NormalProject = ({ project }) => (
  <div className="project-card">
    <h3>{project.title}</h3>
    <p>{project.description}</p>

    <div className="tech-stack">
      {project.tech.map((tech, i) => (
        <span key={i}>{tech}</span>
      ))}
    </div>

    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="project-btn"
      >
        View on GitHub
      </a>
    )}
  </div>
);

export default Projects;
