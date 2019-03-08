import React from "react";
import Point from "../../../components/PointNode";
import Wrapper from "../../../components/SectionWrapper";
import languages from './languages';
import comprehensions from './compherensions';
import tools from './tools';

class About extends React.Component {
    render() {
        return (
            <Wrapper className="light-bg full" id="about">
                <div>
                    <h5 className="dark-blue-text title">ABOUT ME</h5>
                    <h6 style={{marginTop:20, marginBottom:40}}>
                        I am a learning Full-Stack developer, previously experiencing working in the backend, now engaging frontend developing.
                        I love programming and I love to learn how to code all things exciting. 
                        In addition to my programming skills, I am also in possession of good social and communication skills. 
                        On top of that, I am a dedicated worker who enjoys working in a team, making me a good addition to any working team I am put into.
                        I am passionate and eager to learn and deliver high-quality work.
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