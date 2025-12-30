import "./Resume.css";

function Resume() {
  return (
    <section className="resume-section" id="resume">
      <h2>My Resume</h2>
      <p>You can preview or download my resume</p>

      <div className="resume-buttons">
        {/* ✅ PREVIEW (NEW TAB – GUARANTEED) */}
        <a
          href={`${window.location.origin}/AASIF-FlowCV-Resume-20251115.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn secondary"
        >
          Preview Resume
        </a>

        {/* ✅ DOWNLOAD */}
        <a
          href="/AASIF-FlowCV-Resume-20251115.pdf"
          download
          className="resume-btn primary"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
