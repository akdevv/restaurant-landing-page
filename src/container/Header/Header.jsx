import "./Header.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

function Header() {
	return (
		<div id="home" className="app__header app__wrapper section__padding">
			<div className="app__wrapper_info">
				<SubHeading title="Chase the new flavour" />
				<h1 className="app__header-h1">The Key to Fine Dining</h1>
				<p className="p__opensans" style={{ margin: "2rem 0" }}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Tempora nostrum ad, hic, iure porro molestiae deleniti
					labore alias quisquam sequi minima ullam necessitatibus quos
					doloribus at, quod corrupti aut nesciunt.
				</p>
				<button type="button" className="custom__button">
					Explore Menu
				</button>
			</div>
			<div className="app__wrapper_img">
				<img src={images.welcome} alt="header img" />
			</div>
		</div>
	);
}

export default Header;
