import { CssBaseline, PaletteMode, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import React, { useMemo, useState } from "react";
import { darkModePalette, lightThemePalette } from "./theme";

type ThemeContextType = {
	toggleTheme: () => void;
	themeMode?: PaletteMode;
};

type ThemeSwitcherProps = {
	children?: JSX.Element;
};

export const ThemeContext = React.createContext<ThemeContextType>({ toggleTheme: () => {} });

const ThemeSwitcher = ({ children }: ThemeSwitcherProps) => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [themeMode, setThemeMode] = useState<PaletteMode>(prefersDarkMode ? "dark" : "light");

	const theme = useMemo(() => {
		return createTheme({
			palette: themeMode === "light" ? lightThemePalette : darkModePalette,
		});
	}, [themeMode]);

	/** Theme toggler */
	const toggleTheme = () => {
		setThemeMode((prevThemeMode) => (prevThemeMode === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ toggleTheme, themeMode }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export default ThemeSwitcher;
