import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

type QueryAPIProps = {
	children?: JSX.Element;
};

const QueryAPI = ({ children }: QueryAPIProps) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryAPI;
