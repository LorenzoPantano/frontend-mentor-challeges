import { useQuery } from "@tanstack/react-query";
import { getAll } from "../api/functions";
import { Country } from "../types/country";
import { CircularProgress, Grid, Stack } from "@mui/material";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import { useCountries } from "../hooks/useCountries";
import { useCallback, useState } from "react";

const Home = () => {
	const { isLoading, isError, data } = useCountries();
	const [searchBarText, setSearchBarText] = useState("");
	const [regionFilter, setRegionFilter] = useState("");

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
			<SearchBar
				options={data!}
				searchText={searchBarText}
				setSearchText={setSearchBarText}
				regionText={regionFilter}
				setRegionText={setRegionFilter}
			/>
			<Grid container spacing={8}>
				{data!
					.filter((item: Country) => item.region.includes(regionFilter))
					.filter((item: Country) => item.name.toLowerCase().includes(searchBarText.toLowerCase()))
					.map((item: Country) => {
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
