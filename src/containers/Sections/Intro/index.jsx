import Button from "../../../components/Button";
import React from "react";
import Typing from 'react-typing-animation';
import Wrapper from "../../../components/SectionWrapper";

class Intro extends React.Component {    
    render() {
        return (
            <Wrapper 
                dark 
                height="90"
                align="center"
                style={{ marginTop: -20 }} 
                id="intro"
            >
                <div>
                    <h5 className="white-text title">HELLO, ARE YOU LOOKING FOR ME? I AM</h5>
                    {this.props.loading || 
                        <Typing hideCursor={true}> 
                            <Typing.Speed ms={10} />
                            <h1 className="light-blue-text mainTitle" style={{ marginBottom: 30, marginTop: 20, fontWeight:"bolder" }}>
                                Jonathan Christopher Jakub
                            </h1>
                        </Typing>
                        }
                    <h6 className="white-text">
                        I am a future <b>Full-Stack Developer</b> and I am interested in 
                        <b> Software Engineering</b> and <b>Machine Learning</b>.<br></br>
                        Currently a Computer Science student at The University of Indonesia, I still have a lot to learn and I am ready for it.
                    </h6>
                    <div style={{ marginTop: 30, marginBottom:100 }}>
                        <Button 
                            dark
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={1000}
                        >
                            <span className="bold light-blue-text">KNOW MORE</span>    
                        </Button>
                        <Button 
                            light
                            href="https://drive.google.com/uc?export=download&id=1IZhxTWkHtbGeQ-XGn-F-8VG2poMb_TEt"
                            style={{textDecoration: "none"}}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="bold dark-blue-text">SEE RESUME</span>    
                        </Button>                    
                    </div>
                </div>
            </Wrapper>
        );
    }  
}

export default Intro;