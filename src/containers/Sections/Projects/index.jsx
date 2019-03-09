import React from "react";
import Wrapper from "../../../components/SectionWrapper";
import ProjectCard from "../../../components/ProjectCard";
import projects from "./projects";

class Intro extends React.Component {
    render() {
        return (
            <Wrapper 
                dark 
                height="100" 
                align="center" 
                id="projects"
            >
                <div>
                    <h5 className="light-blue-text title" style={{ marginBottom: 20}}>PROJECTS</h5>
                    <div className="row justify-contents-start">
                            {projects.map(({ title, subtitle, gitrepo, content, dark }) => (
                                <div className="col-md-4">
                                    <ProjectCard title={title} subtitle={subtitle} gitrepo={gitrepo} dark={dark}>
                                        {content}
                                    </ProjectCard>
                                </div>  
                            ))}
                    </div>
                </div>
            </Wrapper>
        );
    }  
}

export default Intro;