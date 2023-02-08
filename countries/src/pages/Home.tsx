import React from "react";
import { useThemeSwitcher } from "../hooks/useThemeSwitcher";
import { useQuery } from "@tanstack/react-query";
import { getAll } from "../api/functions";
import { Country } from "../types/country";
import { CircularProgress, Container, Grid, Stack } from "@mui/material";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
	const { data, isError, isLoading } = useQuery(["all"], getAll);

	if (isLoading) {
		return (
			<div style={{ textAlign: "center", padding: "8rem" }}>
				<CircularProgress />
			</div>
		);
	}

	if (isError) {
		return <div>Error</div>;
	}

	return (
		<Stack gap={8} marginTop={8}>
			<SearchBar options={data} />
			<Grid container spacing={8}>
				{data.map((item: Country) => {
					return (
						<Grid item xs={12} sm={4} md={3}>
							<CountryCard key={item.code} country={item} />
						</Grid>
					);
				})}
			</Grid>
		</Stack>
	);
};

export default Home;
