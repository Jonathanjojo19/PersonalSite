import React from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
} from 'reactstrap';

import styled from 'styled-components';
import gitLogo from "../../icons/git.svg";

const SpacedCard = styled.div`
    margin: 1em 0.5em;
`;

const ImageWrapper = styled.div`
    position: relative;
    width:27px;
    background-color: ${props => props.dark ? "#000011" : "#9EA8C7"};;
    border-radius: 50%;
    float: right;
    margin: 0.5em 0.5em 0.5em auto;

    &:before{
        content: "";
        display: block;
        padding-top: 100%;
    }
`;

const WrappedImage = styled.div`
    position:  absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;

const CardStyle = {
    backgroundColor: "#091628",
    borderRadius: 0,
    borderColor: "#091628",
    paddingTop: 0,
    paddingBottom: 25,
    color: "#9EA8C7",
}

class ProjectCard extends React.Component {
    
    render() {
        let link;
        if (this.props.gitrepo !== "") {
            link = 
                <a href={this.props.gitrepo}>
                    <img
                        src={gitLogo}
                        alt="Repo"
                        style={{ width: 16, margin: 2 }}
                    />
                </a>;
        } else {
            link = 
                <img
                    src={gitLogo}
                    alt="Repo"
                    style={{ width: 16, margin: 2 }}
                />
        }
        return (
            <SpacedCard>
                <div>
                    <Card className="project-card" style={CardStyle}>
                        <ImageWrapper dark={this.props.dark}>
                            <WrappedImage>
                                {link}
                            </WrappedImage>
                        </ImageWrapper>
                        <CardBody style={{ paddingTop: 0, textAlign: "left"}}>
                            <CardTitle>
                                <h3>
                                    {this.props.title}
                                </h3>
                            </CardTitle>
                            <CardText>{this.props.children}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </SpacedCard>
        );
    }
}

export default ProjectCard;