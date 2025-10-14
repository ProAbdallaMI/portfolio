import Home from "./sections/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./sections/Footer";
import Education from "./sections/Education";

function App() {
  return (
    <div className="flex flex-col gap-15 bg-background text-secondary text-sm">
      <Navbar />
      <Home />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
