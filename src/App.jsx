import "./App.css";
import { Navbar } from "./components";
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
