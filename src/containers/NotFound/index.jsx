import React from "react";
import styled from "styled-components";

import Link from "../../components/Link";

const Wrapper = styled.div`
	padding: 5vh 0vw 40vh 5vw;
	display: flex;
	align-items: center;
	min-height: 100vh;
`;

const NotFound = () => (
	<Wrapper className="dark-bg">
		<div>
			<h1 className="dark-grey-text" style={{fontSize:100}}>
				404 <span className="light-blue-text">Page Not Found</span>
			</h1>
			<h2 className="white-text">You seem like a hefty wanderer..</h2>
			<span className="light-blue-text">And a lost one too, come {" "}
			<Link
				target=".."
				label="here"
			/>
			</span>
		</div>
	</Wrapper>
);

export default NotFound;
