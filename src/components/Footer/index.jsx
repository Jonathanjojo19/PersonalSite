import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
	bottom: 0;
	text-align: center;
	padding-top:0.5em;
	padding-bottom:0.1em;
	whiteSpace: initial;
	background-color: #000011;
`;

const Footer = () => (
	<StyledFooter>
		<span className="light-blue-text">DEVELOPED BY </span>
		<span className="white-text bolder"> JONATHAN CHRISTOPHER JAKUB</span>
	</StyledFooter>
);

export default Footer;