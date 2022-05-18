import Button from "../Button/Button";
import HeroMobile from '../../assets/image-hero-mobile.webp'

import "./Hero.css";

const Hero = () => {
	return (
		<div className="hero-container">
      <div className="hero-text">
        <h1>Maximize skill, minimize budget</h1>
        <p className="hero-description">
          Our modern courses across a range of in-demand skills will give you the
          knowledge you need to live the life you want.
        </p>
        <Button type="type-2"/>
      </div>
      <div className="hero-image">
        <img src={HeroMobile} alt="hero" />
      </div>
		</div>
	);
};

export default Hero;
