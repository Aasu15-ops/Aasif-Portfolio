import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaDatabase,
  FaChartBar,
  FaEnvelope,
  FaWindows,
  FaCode
} from "react-icons/fa6";

import {
  SiPandas,
  SiNumpy,
  SiTableau,
  SiJupyter,
  SiVisualstudiocode
} from "react-icons/si";





function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <p className="skills-subtitle">
          Technologies and tools I work with
        </p>

        {/* Frontend */}
        <div className="skills-group">
          <h3>Frontend Development</h3>
          <div className="skills-grid">
            <div className="skill-card"><FaHtml5 /><span>HTML</span></div>
            <div className="skill-card"><FaCss3Alt /><span>CSS</span></div>
            <div className="skill-card"><FaJs /><span>JavaScript</span></div>
            <div className="skill-card"><FaReact /><span>React</span></div>
          </div>
        </div>

        {/* Programming & Data */}
        <div className="skills-group">
          <h3>Programming & Data</h3>
          <div className="skills-grid">
            <div className="skill-card"><FaPython /><span>Python</span></div>
            <div className="skill-card"><SiPandas /><span>Pandas</span></div>
            <div className="skill-card"><SiNumpy /><span>NumPy</span></div>
            <div className="skill-card"><FaDatabase /><span>SQL</span></div>
          </div>
        </div>

        {/* Visualization */}
        <div className="skills-group">
          <h3>Data Visualization</h3>
          <div className="skills-grid">
            <div className="skill-card"><FaChartBar /><span>Power BI</span></div>
            <div className="skill-card"><SiTableau /><span>Tableau</span></div>
          </div>
        </div>

        {/* Tools */}
        <div className="skills-group">
  <h3>Tools & Platforms</h3>
  <div className="skills-grid tools-grid">
    <div className="skill-card"><FaGitAlt /><span>Git</span></div>
    <div className="skill-card"><FaGithub /><span>GitHub</span></div>
    <div className="skill-card"><FaEnvelope /><span>EmailJS</span></div>
    <div className="skill-card"><FaWindows /><span>Microsoft 365</span></div>
    <div className="skill-card"><SiJupyter /><span>Jupyter Notebook</span></div>
    <div className="skill-card"><FaCode /><span>VS Code</span></div>
  </div>
</div>

      </div>
    </section>
  );
}

export default Skills;
