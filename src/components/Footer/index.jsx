import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
	text-align: center;
	font-family:Avenir;
	padding-top:1.5em;
	padding-bottom:0.1em;
	font-size:0.7em;
`;

const Footer = () => (
	<StyledFooter>
		<p className="light-blue-text" style={{whiteSpace: "initial"}}>DEVELOPED BY JONATHAN CHRISTOPHER JAKUB</p>
	</StyledFooter>
);

export default Footer;