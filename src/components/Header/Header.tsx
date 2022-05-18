import "./Header.css";
import { ReactComponent as LogoDark } from "../../assets/logo-dark.svg";
import { Button } from "../index";

const Header = () => {
	return (
		<header>
			<LogoDark />
			<Button type="type-1" />
		</header>
	);
};

export default Header;
