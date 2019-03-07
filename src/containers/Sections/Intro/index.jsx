import React from "react";
import Button from "../../../components/Button";
import Wrapper from "../../../components/SectionWrapper";
import { Link } from "react-scroll";
import Typing from 'react-typing-animation';

class Intro extends React.Component {
    render() {
        return (
            <Wrapper className="dark-bg h90" style={{ marginTop: -20 }}>
                <div id="intro">
                    <h5 className="white-text title">HELLO, ARE YOU LOOKING FOR ME? I AM</h5>
                    <Typing speed='80' hideCursor="true">
                        <h1 className="light-blue-text mainTitle" style={{ marginBottom: 30, marginTop: 20 }}>
                            Jonathan Christopher Jakub
                        </h1>
                    </Typing>
                    <h6 className="white-text">
                        a <span className="bold">Full-Stack Developer</span> based in Jakarta, Indonesia interested in 
                        <span className="bold"> Software Engineering</span> and <span className="bold">Machine Learning</span>. 
                        Currently a Computer Science student at The University of Indonesia.
                    </h6>
                    <div style={{ marginTop: 30, marginBottom:100 }}>
                        <Button dark>
                        <Link 
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-125}
                            duration={1000}
                            >
                            <span className="bold light-blue-text">KNOW MORE</span>
                        </Link>
                        </Button>
                        <Button light>
                            <a 
                                href="https://docs.google.com/document/d/15w3Yma1BeAfFxDieAPPnKCRk0LqA95TjAo81FhRhXL8/edit?usp=sharing"
                                style={{textDecoration: "none"}}
                                target="_blank"
                            >
                            <span className="bold dark-blue-text">RESUME</span>
                            </a>
                        </Button>                    
                    </div>
                </div>
            </Wrapper>
        );
    }  
}

export default Intro;