import Home from "./sections/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="bg-background text-secondary text-sm">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
