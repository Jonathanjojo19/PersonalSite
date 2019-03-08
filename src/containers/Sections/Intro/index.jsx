import React from "react";
import Button from "../../../components/Button";
import Wrapper from "../../../components/SectionWrapper";
import { Link } from "react-scroll";
import Typing from 'react-typing-animation';

class Intro extends React.Component {    
    render() {
        return (
            <Wrapper className="dark-bg h90" style={{ marginTop: -20 }} id="intro">
                <div>
                    <h5 className="white-text title">HELLO, ARE YOU LOOKING FOR ME? I AM</h5>
                    {this.props.loading || <Typing speed="60" startDelay="100" hideCursor="true"> 
                        <h1 className="light-blue-text mainTitle" style={{ marginBottom: 30, marginTop: 20 }}>
                            Jonathan Christopher Jakub
                        </h1>
                    </Typing>}
                    <h6 className="white-text">
                        I want to be a <b>Full-Stack Developer</b> and I am interested in 
                        <b> Software Engineering</b> and <b>Machine Learning</b>.<br></br>
                        Currently a Computer Science student at The University of Indonesia, I still have a lot to learn..
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
                                href="https://drive.google.com/uc?export=download&id=1IZhxTWkHtbGeQ-XGn-F-8VG2poMb_TEt"
                                style={{textDecoration: "none"}}
                                target="_blank"
                                rel="noopener noreferrer"
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