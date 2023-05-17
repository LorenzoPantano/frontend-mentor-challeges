import { Search } from "@mui/icons-material";
import {
	Autocomplete,
	Popper,
	PopperProps,
	SxProps,
	TextField,
	Typography,
	useTheme,
} from "@mui/material";
import React from "react";
import { Country, Region } from "../types/country";

type CountriesAutocompleteProps = {
	options: string[];
	placeholder: string;
	startAdornment?: React.ReactNode;
	id?: string;
	paddingOptions?: string;
	freeSolo?: boolean;
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
};

const autocompleteSxProps: SxProps = {
	"& .MuiAutocomplete-endAdornment": {
		marginRight: "1rem",
	},

	"& .MuiInputBase-input": {
		marginRight: "1rem",
	},
};

const PopperComponent = (props: PopperProps) => {
	return (
		<Popper {...props} placement="bottom-start" style={{ ...props.style, paddingTop: "1rem" }} />
	);
};

const CountriesAutocomplete = ({
	options,
	placeholder,
	startAdornment,
	id,
	paddingOptions = "1rem 1.5rem",
	freeSolo = false,
	value,
	setValue: setText,
}: CountriesAutocompleteProps) => {
	const theme = useTheme();

	return (
		<Autocomplete
			id={id}
			freeSolo={freeSolo}
			options={options}
			renderOption={(props, option, {}) => {
				return (
					<li style={{ padding: paddingOptions, fontWeight: 700 }} {...props}>
						<Typography>{option}</Typography>
					</li>
				);
			}}
			sx={autocompleteSxProps}
			PopperComponent={PopperComponent}
			renderInput={(params) => (
				<TextField
					{...params}
					variant="standard"
					InputProps={{
						...params.InputProps,
						disableUnderline: true,
						placeholder,
						startAdornment,
						style: { padding: "1rem 1.5rem" },
					}}
				/>
			)}
			style={{
				backgroundColor: theme.palette.background.paper,
				borderRadius: "0.5rem",
			}}
			value={value}
			onChange={(_event, newValue) => {
				return setText(newValue || "");
			}}
		/>
	);
};

export default CountriesAutocomplete;
