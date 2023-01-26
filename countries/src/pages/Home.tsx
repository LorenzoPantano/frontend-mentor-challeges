import React from "react";
import { useThemeSwitcher } from "../hooks/useThemeSwitcher";
import { useQuery } from "@tanstack/react-query";
import { getAll } from "../api/functions";

const Home = () => {
	const { data, isError, isLoading } = useQuery(["all"], getAll);

	return (
		<>
			{isLoading && <div>Loading...</div>}
			{isError && <div>Error</div>}
			{data && data.map((item) => <div key={item.name.common}>{item.name.common}</div>)}
		</>
	);
};

export default Home;
