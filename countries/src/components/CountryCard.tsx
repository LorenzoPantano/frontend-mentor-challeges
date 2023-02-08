import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Country } from "../types/country";

type CountryCardProps = {
	country: Country;
};

const CountryCard = ({ country }: CountryCardProps) => {
	return (
		<Card>
			<CardActionArea>
				<CardMedia component="svg" image={country.flagUrl} style={{ aspectRatio: "16/9" }} />
				<CardContent style={{ padding: "1.5rem" }}>
					<Typography fontSize={18} fontWeight={800} marginBottom={2}>
						{country.name}
					</Typography>
					<CountryDetailRow property="Population" value={country.population.toString()} />
					<CountryDetailRow property="Region" value={country.region} />
					<CountryDetailRow property="Capital" value={country.capital} />
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

type CountryDetailRowProps = {
	property: string;
	value: string;
};

const CountryDetailRow = ({ property, value }: CountryDetailRowProps) => {
	return (
		<Box display="flex" flex={1} alignItems="center" gap={0.5}>
			<Typography fontSize={14} fontWeight={600}>
				{property}:
			</Typography>
			<Typography fontSize={14} fontWeight={300}>
				{value}
			</Typography>
		</Box>
	);
};

export default CountryCard;
