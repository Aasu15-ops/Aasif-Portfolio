
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";
import Resume from "./components/Resume";
import ThemeToggle from "./components/ThemeToggle"; 




function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      {/* <Home/> */}
      <Resume />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer/>
      <BackToTop />
      <ThemeToggle />
      
    </>
  );
}

export default App;
