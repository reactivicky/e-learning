import { Cards, Footer, Header, Hero } from "./components";
import HeroTablet from "./assets/image-hero-tablet.webp";
import HeroDesktop from "./assets/image-hero-desktop.webp";

function App() {
	return (
		<>
			<div className="app-container">
				<img className="app-container__img" src={HeroTablet} alt="hero" />
				<img className="app-container__img-big" src={HeroDesktop} alt="hero" />
				<Header />
				<Hero />
				<Cards />
			</div>
			<Footer />
		</>
	);
}

export default App;
