import React from 'react';
import { 
    Card, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle
} from 'reactstrap';
import styled from 'styled-components';

const StyledCard = styled.div`
    margin: 1em 0.5em;
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
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody>
                    </Card>
                </div>
            </StyledCard>
        );
    }
}

export default ProjectCard;