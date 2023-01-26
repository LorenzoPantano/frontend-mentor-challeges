import { CountryAPI, Country } from "../types/country";
import { getValuesFromObject } from "../utils/helper";
import ENDPOINTS from "./config";

async function getAll() {
	const res = await fetch(ENDPOINTS.all, { method: "GET" });
	const data = await res.json();

	const countries: Country[] = await Promise.all(
		data.map(async (countryAPI: CountryAPI) => {
			let borderNames: string[] = [];
			if (countryAPI.borders) {
				borderNames = await Promise.all(
					countryAPI.borders.map(async (borderCode: string) => {
						return getCountryNameByCode(borderCode);
					})
				);
			}

			const country: Country = {
				name: countryAPI.name,
				nativeName: countryAPI.nativeName,
				borderCountries: borderNames,
				capital: countryAPI.capital,
				code: countryAPI.alpha3Code,
				currencies: countryAPI.currencies ? countryAPI.currencies.map((curr: { name: string }) => curr.name) : [],
				flagUrl: countryAPI.flag,
				population: countryAPI.population,
				languages: countryAPI.languages ? countryAPI.languages.map((lang: { name: string }) => lang.name) : [],
				region: countryAPI.region,
				subregion: countryAPI.subregion,
				topLevelDomain: countryAPI.topLevelDomain[0],
			};

			return country;
		})
	);

	return countries;
}

async function getCountryNameByCode(code: string): Promise<string> {
	const res = await fetch(ENDPOINTS.code + code + "/?fields=name", { method: "GET" });
	const data = await res.json();

	return data.name;
}

export { getAll, getCountryNameByCode };
