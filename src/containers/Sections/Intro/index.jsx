import Button from "../../../components/Button";
import React from "react";
import Typing from 'react-typing-animation';
import Wrapper from "../../../components/SectionWrapper";

class Intro extends React.Component {    
    render() {
        return (
            <Wrapper 
                dark 
                height="100"
                align="center"
                style={{ marginTop: -20 }} 
                id="intro"
            >
                <div>
                    <h5 className="white-text title">HELLO, I AM</h5>
                    {this.props.loading || 
                        <Typing hideCursor={true}> 
                            <Typing.Speed ms={10} />
                            <h1 className="light-blue-text mainTitle" style={{ marginBottom: 30, marginTop: 20, fontWeight:"bolder" }}>
                                Jonathan Christopher Jakub
                            </h1>
                        </Typing>
                        }
                    <h6 className="white-text">
                        I am a future IT Developer and I am interested in Software Engineering and Artificial Intelligence. <br></br>
                        Currently a Computer Science undergraduate student at the University of Indonesia, I have much to take and more to give. <br></br>
                        I was born for this, and I am ready for it.
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
                            <span className="bold light-blue-text">EXPLORE ME</span>    
                        </Button>
                        <Button 
                            light
                            external
                            href="https://docs.google.com/document/d/15w3Yma1BeAfFxDieAPPnKCRk0LqA95TjAo81FhRhXL8/edit?usp=sharing"
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