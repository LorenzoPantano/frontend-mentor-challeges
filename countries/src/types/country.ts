export type Country = {
	name: string;
	nativeName: string;
	code: string;
	region: string;
	subregion: string;
	population: number;
	capital: string;
	topLevelDomain: string;
	languages: string[];
	currencies: string[];
	borderCountries: string[];
	flagUrl: string;
};

export type CountryAPI = {
	name: string;
	nativeName: string;
	alpha3Code: string;
	capital: string;
	region: string;
	subregion: string;
	population: number;
	borders: string[];
	topLevelDomain: string[];
	currencies: { name: string }[];
	languages: { name: string }[];
	flag: string;
};

export enum Region {
	AFRICA = "Africa",
	AMERICAS = "Americas",
	ASIA = "Asia",
	EUROPE = "Europe",
	OCEANIA = "Oceania",
}
