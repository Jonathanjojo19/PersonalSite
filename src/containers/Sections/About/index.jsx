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
                        I am a learning <b>Full-Stack developer</b>, previously experiencing working in the <b>backend</b>, now engaging <b>frontend</b> developing.
                        I love programming and I love to learn how to code all things exciting. 
                        In addition to my programming skills, I am also in possession of good <b>social</b> and <b>communication</b> skills. 
                        On top of that, I am a dedicated worker who enjoys <b>working in a team</b>, making me a good addition to any working team I am put into.
                        I am <b>passionate</b> and <b>eager</b> to learn and deliver <b>high-quality</b> work.
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