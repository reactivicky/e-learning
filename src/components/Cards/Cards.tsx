import "./Cards.css";
import { motion } from "framer-motion";
import AnimationIcon from "../../assets/icon-animation.svg";
import BusinessIcon from "../../assets/icon-business.svg";
import CryptoIcon from "../../assets/icon-crypto.svg";
import DesignIcon from "../../assets/icon-design.svg";
import PhotographyIcon from "../../assets/icon-photography.svg";

const Cards = () => {
	const BtnComponent = () => (
		<motion.button whileTap={{ scale: 0.8 }} className="card-btn">
			Get Started
		</motion.button>
	);

	return (
		<div className="card-container">
			<div className="card card-colored">
				<p>Check out our most popular courses!</p>
			</div>

			<div className="card">
				<div className="card-img-container">
					<img src={AnimationIcon} alt='animation' />
				</div>
				<div>
					<h4 className="card-heading">Animation</h4>
					<p className="card-text">
						Learn the latest animation techniques to create stunning motion
						design and captivate your audience.
					</p>
				</div>
				<BtnComponent />
			</div>

			<div className="card">
				<div className="card-img-container">
					<img src={DesignIcon} alt='design' />
				</div>
				<div>
					<h4 className="card-heading">Design</h4>
					<p className="card-text">
						Create beautiful, usable interfaces to help shape the future of how
						the web looks.
					</p>
				</div>
				<BtnComponent />
			</div>

			<div className="card">
				<div className="card-img-container">
					<img src={PhotographyIcon} alt="icon" />
				</div>
				<div>
					<h4 className="card-heading">Photography</h4>
					<p className="card-text">
						Explore critical fundamentals like lighting, composition, and focus
						to capture exceptional photos.
					</p>
				</div>
				<BtnComponent />
			</div>

			<div className="card">
				<div className="card-img-container">
					<img src={CryptoIcon} alt='crypto' />
				</div>
				<div>
					<h4 className="card-heading">Crypto</h4>
					<p className="card-text">
						All you need to know to get started investing in crypto. Go from
						beginner to advanced with this 54 hour course.
					</p>
				</div>
				<BtnComponent />
			</div>

			<div className="card">
				<div className="card-img-container">
					<img src={BusinessIcon} alt='business' />
				</div>
				<div>
					<h4 className="card-heading">Business</h4>
					<p className="card-text">
						A step-by-step playbook to help you start, scale, and sustain your
						business without outside investment.
					</p>
				</div>
				<BtnComponent />
			</div>
		</div>
	);
};

export default Cards;
