import { Container } from "@mui/material";
import React from "react";

type PageProps = {
	children?: JSX.Element;
};

const Page = ({ children }: PageProps) => {
	return <Container maxWidth="lg">{children}</Container>;
};

export default Page;
