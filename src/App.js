import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Resume from "./components/Resume/Resume";
import ProjectList from "./components/ProjectListComponent/ProjectList";
import Contact from "./components/Contact/Contact";
import "./App.css";
import Footer from "./components/Footer/Footer";
import React, { useState, useRef, useEffect } from "react";
import Project from "./components/Project/Project";
import { personalProjects,workProjects } from "./data/data";
function App() {
  useEffect(() => {
    const handleScroll = () => {};

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [visibleSection, setVisibleSection] = useState();

  const scrollTo = (ele) => {
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };

  const handleScroll = () => {
    const { height: headerHeight } = getDimensions(headerRef.current);
    const scrollPosition = window.scrollY + headerHeight;
  };

  const headerRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="app-container" ref={homeRef}>
      <div className="sticky">
        <Header
          headerRef={headerRef}
          homeRef={homeRef}
          aboutRef={aboutRef}
          resRef={resRef}
          projectRef={projectRef}
          contactRef={contactRef}
          scrollto={scrollTo}
        />
      </div>
      <Home id="Home" homeRef={homeRef} />
      <About id="About" aboutRef={aboutRef} />
      <Resume id="Resume" resRef={resRef} scrollto={scrollTo} />
      <ProjectList projectRef={projectRef} projectObj={workProjects} />
      <ProjectList  projectObj={personalProjects} />
      <Contact contactRef={contactRef} id="Contact" />
      <Footer
        homeRef={homeRef}
        aboutRef={aboutRef}
        resRef={resRef}
        projectRef={projectRef}
        contactRef={contactRef}
        scrollto={scrollTo}
      />
    </div>
  );
}

export default App;
