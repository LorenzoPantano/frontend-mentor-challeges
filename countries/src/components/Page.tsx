import { Box, Container } from "@mui/material";
import React from "react";
import Header from "./Header";

type PageProps = {
	children?: JSX.Element;
};

const Page = ({ children }: PageProps) => {
	return (
		<>
			<Header />
			<Container maxWidth="xl">{children}</Container>
		</>
	);
};

export default Page;
