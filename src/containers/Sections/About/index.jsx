import React from "react";
import Point from "../../../components/PointNode";
import Wrapper from "../../../components/SectionWrapper";
import languages from './languages';
import comprehensions from './compherensions';
import tools from './tools';

class About extends React.Component {
    render() {
        return (
            <Wrapper 
                light 
                height='100' 
                align="center"
                id="about"
            >
                <div>
                    <h5 className="dark-blue-text title">ABOUT ME</h5>
                    <h6 className="dark-blue-text" style={{marginTop:20, marginBottom:40}}>
                        I am a technology enthusiast and an learning developer. 
                        I am devoted to programming and I am thrilled to code all things inspiring. 
                        <br></br>
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