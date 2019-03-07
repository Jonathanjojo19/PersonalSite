import React from "react";
import Point from "../../../components/PointNode";
import Wrapper from "../../../components/SectionWrapper";
import languages from './languages';
import comprehensions from './compherensions';
import tools from './tools';

class About extends React.Component {
    render() {
        return (
            <Wrapper className="light-bg full">
                <div id="about">
                    <h5 className="dark-blue-text title">ABOUT ME</h5>
                    <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </h6>
                    <div>
                        {languages.map((language) => 
                            <Point red>{language}</Point>
                        )}
                    </div>
                    <div>
                        {tools.map((tool) => 
                            <Point blue>{tool}</Point>
                        )}
                    </div>
                    <div>
                        {comprehensions.map((compherension) => 
                            <Point red>{compherension}</Point>
                        )}
                    </div>
                </div>
            </Wrapper>
        );
    }  
}

export default About;