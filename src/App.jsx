import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import Skills from "./Pages/Skills";

const App = () => {
  return (
    <div>
      <Home />
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
      <Navbar/>
    </div>
  );
};

export default App;
