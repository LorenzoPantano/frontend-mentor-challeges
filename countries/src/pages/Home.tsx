import React from "react";
import { useThemeSwitcher } from "../hooks/useThemeSwitcher";
import { useQuery } from "@tanstack/react-query";
import { getAll } from "../api/functions";
import { Country } from "../types/country";
import { CircularProgress, Container } from "@mui/material";

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

	return <div>{data && data.map((item: Country) => <div key={item.code}>{item.name}</div>)}</div>;
};

export default Home;
