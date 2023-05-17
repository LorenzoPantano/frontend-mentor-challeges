import { useEffect, useState } from "react";
import { Country } from "../types/country";
import ENDPOINTS from "../api/config";
import { useQuery } from "@tanstack/react-query";
import { getAll } from "../api/functions";

export const useCountries = () => {
	const { data, isError, isLoading } = useQuery([ENDPOINTS.all], getAll);

	return {
		data,
		isError,
		isLoading,
	};
};
