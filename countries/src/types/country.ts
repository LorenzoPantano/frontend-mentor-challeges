type Country = {
	name: {
		common: string;
		nativeName: string[];
	};
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

export default Country;
