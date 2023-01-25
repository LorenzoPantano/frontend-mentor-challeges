import React from "react";
import { useThemeSwitcher } from "../hooks/useThemeSwitcher";

const Home = () => {
	const { toggleTheme } = useThemeSwitcher();

	return (
		<div>
			<button onClick={() => toggleTheme()}>Toggle</button>
			Home
		</div>
	);
};

export default Home;
