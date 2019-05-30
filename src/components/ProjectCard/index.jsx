import React from 'react';
import styled from 'styled-components';
import gitLogo from "../../icons/git.svg";

const ImageWrapper = styled.div`
    position: relative;
    width:27px;
    display: flex;
    justify-content: middle;
    background-color: ${props => props.dark ? "#000011" : "#9EA8C7"};;
    border-radius: 50%;
    margin: 0.5em 0.5em 0.5em auto;
    text-align: center;

    &:before{
        content: "";
        display: block;
        padding-top: 100%; 
    }
`;

class ProjectCard extends React.Component {
    
    render() {
        let link;
        if (this.props.gitrepo !== "") {
            link = 
                <a href={this.props.gitrepo}>
                    <img
                        src={gitLogo}
                        alt="Repo"
                        style={{ width: 20, zIndex:2, margin:3, marginTop:5}}
                    />
                </a>;
        } else {
            link = 
                <img
                    src={gitLogo}
                    alt="Repo"
                    style={{ width: 20, zIndex:2, margin:3, marginTop:5}}
                />
        }
        return (
            <div className="project-card draw">
                <div>
                    <ImageWrapper dark={this.props.dark}>
                        {link}
                    </ImageWrapper>
                </div>
                <div>
                    <h5 className="light-blue-text title" style={{letterSpacing:1, textAlign:"left"}}>
                        {this.props.title}
                    </h5>
                </div>
                <div>
                    <br></br>
                    <p className="light-grey-text">
                        {this.props.children}
                    </p>
                </div>
            </div>
        );
    }
}

export default ProjectCard;