import { useState } from "react";
import Page from "./components/Page";
import Home from "./pages/Home";
import ThemeSwitcher from "./style/ThemeSwitcher";
import QueryAPI from "./components/QueryAPI";

function App() {
	return (
		<QueryAPI>
			<ThemeSwitcher>
				<Page>
					<Home />
				</Page>
			</ThemeSwitcher>
		</QueryAPI>
	);
}

export default App;
