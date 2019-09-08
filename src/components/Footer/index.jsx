import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
	bottom: 0;
	text-align: center;
	padding-top:0.5em;
	padding-bottom:0.3em;
	whiteSpace: initial;
	background-color: #000011;
`;

const Footer = () => (
	<StyledFooter>
		<span className="white-text bolder">Jonathanjojo </span>
		<span className="light-blue-text"> est. 2019</span>
	</StyledFooter>
);

export default Footer;