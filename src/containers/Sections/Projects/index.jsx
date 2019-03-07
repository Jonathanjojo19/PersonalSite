import React from "react";
import Wrapper from "../../../components/SectionWrapper";
import Card from "../../../components/ProjectCard";

class Intro extends React.Component {
    render() {
        return (
            <Wrapper className="dark-bg full text-center" style={{ marginTop: -20 }}>
                <div id="projects">
                    <h5 className="light-blue-text title" style={{ marginBottom: 20}}>PROJECTS</h5>
                    <div className="row justify-contents-start">
                        <div className="col-md-4">
                            <Card/>
                        </div>  
                        <div className="col-md-4">
                            <Card/>
                        </div>  
                        <div className="col-md-4">
                            <Card/>
                        </div>  
                        <div className="col-md-4">
                            <Card/>
                        </div>
                    </div>
                </div>
            </Wrapper>
        );
    }  
}

export default Intro;