import { motion } from "framer-motion";
import "./Button.css";

type ButtonProps = {
	type: string;
};

const Button: React.FC<ButtonProps> = ({ type }) => {
	switch (type) {
		case "type-1":
			return (
				<motion.button
					whileTap={{ scale: 0.8 }}
					whileHover={{ scale: 1.2 }}
					className="btn type-1"
				>
					Get Started
				</motion.button>
			);

		case "type-2":
			return (
				<motion.button
					whileTap={{ scale: 0.8 }}
					whileHover={{ scale: 1.2 }}
					className="btn type-2"
				>
					Get Started
				</motion.button>
			);
		
			case "type-3":
			return (
				<motion.button
					whileTap={{ scale: 0.8 }}
					whileHover={{ scale: 1.2 }}
					className="btn type-3"
				>
					Get Started
				</motion.button>
			);

		default:
			return <motion.button className="type-1">Get Started</motion.button>;
	}
};

export default Button;
