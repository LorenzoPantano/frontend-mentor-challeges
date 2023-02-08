import { AppBar, Box, Button, Container, Typography, useTheme } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import React from "react";
import { useThemeSwitcher } from "../hooks/useThemeSwitcher";

const Header = () => {
	const { toggleTheme, themeMode } = useThemeSwitcher();
	const theme = useTheme();

	return (
		<AppBar
			position="sticky"
			style={{ padding: "2rem", backgroundColor: theme.palette.background.paper }}
		>
			<Container maxWidth="xl">
				<Box display="flex" justifyContent="space-between">
					<Typography fontSize={24} fontWeight={800}>
						Where in the world?
					</Typography>

					<Button
						variant="text"
						color="inherit"
						style={{ textTransform: "none", padding: "0.5rem 1.2rem" }}
						startIcon={themeMode === "light" ? <DarkMode /> : <LightMode />}
						onClick={() => toggleTheme()}
					>
						<Typography fontSize={16} fontWeight={600}>
							{themeMode === "light" ? "Dark Mode" : "Light Mode"}
						</Typography>
					</Button>
				</Box>
			</Container>
		</AppBar>
	);
};

export default Header;
