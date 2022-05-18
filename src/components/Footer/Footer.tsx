import "./Footer.css";
import { ReactComponent as LogoLight } from "../../assets/logo-light.svg";
import { Button } from "../index";

const Footer = () => {
	return (
		<footer>
			<LogoLight />
      <Button type="type-3" />
		</footer>
	);
};

export default Footer;
