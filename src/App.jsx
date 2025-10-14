import Home from "./sections/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="bg-background text-secondary text-sm">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
