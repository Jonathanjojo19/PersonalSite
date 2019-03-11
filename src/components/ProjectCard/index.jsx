import React from 'react';
import styled from 'styled-components';
import gitLogo from "../../icons/git.svg";

const SpacedCard = styled.div`
    margin: 0.5em;
`;

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

const WrappedImage = styled.img`

`;

const CardStyle = {
    textAlign: "left",
    backgroundColor: "#091628",
    borderRadius: 0,
    borderColor: "#091628",
    padding: 25,
    color: "#9EA8C7",
}

class ProjectCard extends React.Component {
    
    render() {
        let link;
        if (this.props.gitrepo !== "") {
            link = 
                <a href={this.props.gitrepo}>
                    <WrappedImage
                        src={gitLogo}
                        alt="Repo"
                        style={{ width: 20, zIndex:2, margin:3}}
                    />
                </a>;
        } else {
            link = 
                <WrappedImage
                    src={gitLogo}
                    alt="Repo"
                    style={{ width: 20, zIndex:2, margin:3 }}
                />
        }
        return (
            <SpacedCard>
                <div className="project-card draw" style={CardStyle}>
                    <div>
                        <ImageWrapper dark={this.props.dark}>
                            {link}
                        </ImageWrapper>
                    </div>
                    <div>
                        <h3>
                            {this.props.title}
                        </h3>
                    </div>
                    <div>
                        <p>
                            {this.props.children}
                        </p>
                    </div>
                </div>
            </SpacedCard>
        );
    }
}

export default ProjectCard;