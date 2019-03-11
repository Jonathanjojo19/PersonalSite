import React from "react";
import RLink from "../../components/Link";
import Wrapper from "../../components/SectionWrapper"

const ComingSoon = () => (
	<Wrapper 
		dark 
		height="100" 
		align="left"
		id="comingsoon"
	>
		<div>
			<h1 className="dark-grey-text single-string-page large">
				Under<span className="light-blue-text"><wbr></wbr>Construction</span>
			</h1>
			<h2 className="white-text" style={{paddingLeft:5}}>Pretty curious, aren't you?</h2>
			<span className="light-blue-text" style={{paddingLeft:5}}>For now, just explore {" "}
			<RLink
				target="../"
				label="here"
			/>
			</span>
		</div>
	</Wrapper>
);

export default ComingSoon;