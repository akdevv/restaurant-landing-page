import "./AboutUs.css";
import { images } from "../../constants";

function AboutUs() {
	return (
		<div
			id="about"
			className="app__aboutus app__bg flex__center section__padding"
		>
			<div className="app__aboutus-overlay flex__center">
				<img src={images.G} alt="g letter" />
			</div>
			{/* about us section */}
			<div className="app__aboutus-content flex__center">
				<div className="app__aboutus-content_about">
					<h1 className="headtext__cormorant">About Us</h1>
					<img
						src={images.spoon}
						alt="spoon"
						className="spoon__img"
					/>
					<p className="p__opensans">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Animi quod magni hic ullam iure pariatur officiis
						culpa dolores, delectus ratione, repellendus dicta
						recusandae qui illo quia blanditiis magnam, et quisquam!
					</p>
					<button type="button" className="custom__button">
						Know More
					</button>
				</div>

				{/* knife image in middle */}
				<div className="app__aboutus-content_knife flex__center">
					<img src={images.knife} alt="knife image" />
				</div>

				{/* our history section */}
				<div className="app__aboutus-content_history">
					<h1 className="headtext__cormorant">Our History</h1>
					<img
						src={images.spoon}
						alt="spoon"
						className="spoon__img"
					/>
					<p className="p__opensans">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Animi quod magni hic ullam iure pariatur officiis
						culpa dolores, delectus ratione, repellendus dicta
						recusandae qui illo quia blanditiis magnam, et quisquam!
					</p>
					<button type="button" className="custom__button">
						Know More
					</button>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
