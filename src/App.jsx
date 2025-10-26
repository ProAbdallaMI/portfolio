import Home from "./sections/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./sections/Footer";
import Education from "./sections/Education";
import Projects from "./sections/Projects";

function App() {
	return (
		<div className="flex flex-col gap-15 bg-background text-secondary text-sm md:flex-row md:gap-5 md:pr-5">
			<Navbar />
			<div className="flex flex-col gap-15 md:flex md:flex-col md:w-75/100 md:gap-15">
				<Home />
				<Education />
				<Projects />
				<Footer />
			</div>
		</div>
	);
}

export default App;
