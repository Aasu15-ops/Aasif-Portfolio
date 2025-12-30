import "./Home.css";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span>Aasif</span>
        </h1>

        <h2>Frontend Developer</h2>

        <p>
          I build modern, responsive and user-friendly web applications
          using React.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
