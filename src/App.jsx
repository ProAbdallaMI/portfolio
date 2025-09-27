import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <Projects />
      <Skills /> */}
      <Contact />
    </>
  );
}

export default App;
