import Country from "../types/country";
import { getValuesFromObject } from "../utils/helper";
import ENDPOINTS from "./config";

/**
 *
 * @returns {Promise<Country[]>}
 */
async function getAll(): Promise<Country[]> {
	const res = await fetch(ENDPOINTS.all, { method: "GET" });
	const data = await res.json();

	console.log(data);

	const countries = Promise.all(
		data.map(async (country: any) => {
			const borderCountries = getValuesFromObject(country.borders) || [];
			// Get the name of the border countries
			const borderCountryNames = await Promise.all(
				borderCountries.map(async (code: string) => {
					return await getCountryNameByCode(code);
				})
			);

			return {
				name: {
					common: country.name.common,
					nativeNames: getValuesFromObject(country.name.nativeName) || [],
				},
				currencies: getValuesFromObject(country.currencies) || [],
				languages: getValuesFromObject(country.languages) || [],
				capital: getValuesFromObject(country.capital)[0] || "",
				topLevelDomain: getValuesFromObject(country.topLevelDomain)[0] || "",
				population: country.population,
				flagUrl: country.flags.svg,
				region: country.region,
				subregion: country.subregion,
				borderCountries: borderCountryNames,
			};
		})
	);

	return await countries;
}

async function getCountryNameByCode(code: string): Promise<string> {
	const res = await fetch(ENDPOINTS.code + code, { method: "GET" });
	const data = await res.json();

	return data[0].name.common;
}

export { getAll, getCountryNameByCode };
