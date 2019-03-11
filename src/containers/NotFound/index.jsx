import React from "react";
import RLink from "../../components/Link";
import Wrapper from "../../components/SectionWrapper"

const NotFound = () => (
	<Wrapper 
		dark 
		height="100" 
		align="left"
		id="notfound"
	>
		<div>
			<h1 className="dark-grey-text single-string-page large">
				404 <span className="light-blue-text">Page Not Found</span>
			</h1>
			<h2 className="white-text">You seem like a hefty wanderer..</h2>
			<span className="light-blue-text">And a lost one too, come {" "}
			<RLink
				target="../"
				label="here"
			/>
			</span>
		</div>
	</Wrapper>
);

export default NotFound;
