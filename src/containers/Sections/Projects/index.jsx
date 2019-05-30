import React from "react";
import Wrapper from "../../../components/SectionWrapper";
import ProjectCard from "../../../components/ProjectCard";
import projects from "./projects";

class Projects extends React.Component {
    render() {
        return (
            <Wrapper
                dark
                height="100"
                align="center"
                id="projects"
            >
                <div>
                    <h5 className="light-blue-text title" style={{ marginBottom: 20 }}>PROJECTS</h5>
                    <div className="row d-flex justify-content-center">
                        {projects.map(({ title, subtitle, gitrepo, content, dark }) => (
                            <div className="col-xl-4">
                                <ProjectCard title={title} subtitle={subtitle} gitrepo={gitrepo} dark={dark}>
                                    <span className="white-text"><h6>
                                        {content}                           
                                    </h6></span>
                                </ProjectCard>
                            </div>
                        ))}
                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default Projects;