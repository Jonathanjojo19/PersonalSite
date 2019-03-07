import React from 'react';
import { 
    Card, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle
} from 'reactstrap';
import styled from 'styled-components';
import gitLogo from "../../icons/git.svg";

const StyledCard = styled.div`
    margin: 1em 0.5em;
`;

const IconWrapper = styled.div`
    border-radius: 50%;
    background: ${props => props.dark ? "#000011" : "#9EA8C7"};
`;

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledCard>
                <div>
                    <Card>
                        <div style={{maxWidth:20, maxHeight:20, display:"flex", flexDirection:"right"}}>
                            <a href={this.props.gitRepo}>
                                <img 
                                    src={gitLogo}
                                    alt="Repo"
                                    style={{width:16, margin:2}}
                                />
                            </a>
                        </div>
                        <CardBody>
                            <CardTitle>{this.props.title}</CardTitle>
                            <CardSubtitle>{this.props.subtitle}</CardSubtitle>
                            <CardText>{this.props.children}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </StyledCard>
        );
    }
}

export default ProjectCard;