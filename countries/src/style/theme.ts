import { ThemeOptions } from "@mui/material";

/** Light theme palette */
export const lightThemePalette: ThemeOptions["palette"] = {
	mode: "light",
	primary: {
		main: "#3f51b5",
	},
	secondary: {
		main: "#f50057",
	},
	text: {
		primary: "#111517",
		secondary: "#858585",
		disabled: "#858585",
	},
};

/** Dark theme palette */
export const darkModePalette: ThemeOptions["palette"] = {
	mode: "dark",
	primary: {
		main: "#3f51b5",
	},
	secondary: {
		main: "#f50057",
	},
	text: {
		primary: "#ffffff",
		secondary: "#858585",
		disabled: "#858585",
	},
	background: {
		paper: "#2B3945",
		default: "#202D37",
	},
};
