import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Resume from "./components/Resume/Resume";
import ProjectList from "./components/ProjectListComponent/ProjectList";
import Contact from "./components/Contact/Contact";
import "./App.css";
import Footer from "./components/Footer/Footer";
const personalProjects = {
  type: "Personal projects",
  desc: "These are the projects that i build to practice the technologies i use at work in my free time",
  projects: {},
};
const workProjects = {
  type: "Work projects",
  desc: "These are the projects that i have build over the course of my working experience in the industry",
  projects: {},
};
function App() {
  return (
    <div className="app-container">
      <Header />
      <Home />
      <About />
      <Resume />
      <ProjectList projectTypeInfo={personalProjects} />
      <ProjectList projectTypeInfo={workProjects} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
