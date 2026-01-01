import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
// import Projects from "./components/Projects";
import Footer from "./components/Footer";

import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";
import Resume from "./components/Resume";
import ThemeToggle from "./components/ThemeToggle"; 

<h1 style={{ color: "red" }}>
  Portfolio Updated 🔥
</h1>

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills/>
      <Resume />
      <About />
      {/* <Skills /> */}
      {/* <Projects /> */}
      <Contact />
      <Footer/>
      <BackToTop />
      <ThemeToggle />
      
    </>
  );
}

export default App;
