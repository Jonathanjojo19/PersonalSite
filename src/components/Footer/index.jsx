import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
	text-align: center;
	padding-top:1.5em;
	padding-bottom:0.1em;
	font-size:0.7em;
`;

const Footer = () => (
	<StyledFooter>
		<p className="light-blue-text" style={{whiteSpace: "initial"}}>
			DEVELOPED BY <span className="bolder">JONATHAN CHRISTOPHER JAKUB</span>
		</p>
	</StyledFooter>
);

export default Footer;