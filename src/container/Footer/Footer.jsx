import "./Footer.css";
import { images } from "../../constants";
import { FooterOverlay, NewsLetter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

function Footer() {
	return (
		<div className="app__footer section__padding">
			<FooterOverlay />
			<NewsLetter />
			<div className="app__footer-links">
				{/* Contact Us */}
				<div className="app__footer-links_contact">
					<h1 className="app__footer-headtext">Contact Us</h1>
					<p className="p__opensans">120 Drive Greensburg, CA</p>
					<p className="p__opensans">+91 9090190901</p>
					<p className="p__opensans">+91 7012370123</p>
				</div>

				{/* Logo & Social Links */}
				<div className="app__footer-links_logo">
					<img src={images.gericht} alt="footer logo" />
					<p className="p__opensans">
						"The best way to find yourself is to lose yourself in
						the service of others."
					</p>
					<img
						src={images.spoon}
						alt="spoon"
						style={{ marginTop: 15 }}
					/>
					<div className="app__footer-links_icons">
						<FiFacebook />
						<FiTwitter />
						<FiInstagram />
					</div>
				</div>

				{/* Working Hours */}
				<div className="app__footer-links_work">
					<h1 className="app__footer-headtext">Working Hours</h1>
					<p className="p__opensans">Monday - Friday</p>
					<p className="p__opensans">8:00 AM - 12:00 AM</p>
					<p className="p__opensans">Saturday - Sunday</p>
					<p className="p__opensans">7:00 AM - 11:00 PM</p>
				</div>
			</div>
			<div className="footer__copyright">
				<p className="p__opensans">
					&copy;2024 Gerícht. All rights reserved.
				</p>
			</div>
		</div>
	);
}

export default Footer;
