import { useState } from "react";
import Page from "./components/Page";
import Home from "./pages/Home";
import ThemeSwitcher from "./style/ThemeSwitcher";

function App() {
	return (
		<ThemeSwitcher>
			<Page>
				<Home />
			</Page>
		</ThemeSwitcher>
	);
}

export default App;
