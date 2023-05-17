import {
	Autocomplete,
	Box,
	Grid,
	Paper,
	Popper,
	PopperProps,
	Stack,
	SxProps,
	TextField,
	Typography,
	useTheme,
} from "@mui/material";
import React, { useCallback } from "react";
import { Country, Region } from "../types/country";
import { Search } from "@mui/icons-material";
import CountriesAutocomplete from "./CountriesAutocomplete";
import { useCountries } from "../hooks/useCountries";

type SearchBarProps = {
	options: Country[];
	searchText: string;
	setSearchText: React.Dispatch<React.SetStateAction<string>>;
	regionText: string;
	setRegionText: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({
	options,
	setSearchText,
	searchText,
	regionText,
	setRegionText,
}: SearchBarProps) => {
	return (
		<Grid container justifyContent="space-between" spacing={4}>
			<Grid item xs={12} sm={6}>
				<CountriesAutocomplete
					freeSolo
					options={options.map((country) => country.name)}
					placeholder="Search for a country..."
					id="country-search"
					value={searchText}
					setValue={setSearchText}
					startAdornment={<Search style={{ marginRight: ".5rem" }} />}
				/>
			</Grid>
			<Grid item xs={12} sm={3}>
				<CountriesAutocomplete
					options={Object.values(Region)}
					placeholder="Filter by Region"
					id="region-filter"
					value={regionText}
					setValue={setRegionText}
					paddingOptions="1rem 1.5rem"
				/>
			</Grid>
		</Grid>
	);
};

export default SearchBar;
