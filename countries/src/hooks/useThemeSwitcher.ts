import { useContext } from "react";
import { ThemeContext } from "../style/ThemeSwitcher";

export const useThemeSwitcher = () => useContext(ThemeContext);
