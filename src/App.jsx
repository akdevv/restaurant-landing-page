import "./App.css";
import {
	AboutUs,
	Chef,
	FindUs,
	Footer,
	Gallery,
	Header,
	Intro,
	Laurels,
	Menu,
} from "./container";
import { Navbar } from "./components";

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<AboutUs />
			<Menu />
			<Chef />
			<Intro />
			<Laurels />
			<Gallery />
			<FindUs />
			<Footer />
		</>
	);
}

export default App;
