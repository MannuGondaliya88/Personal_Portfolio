import "./App.css";
import Navbar from "./componants/layouts/Navbar";
import Home from "./componants/home/Home";
import Experience from "./componants/home/Experience";
import Skills from "./componants/home/Skills";
import Project from "./componants/home/Project";
import Contact from "./componants/home/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
