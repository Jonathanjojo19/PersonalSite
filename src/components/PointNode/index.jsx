import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    color: ${props => props.blue ? "#000011" : "#821f03"};
    font-size: 0.75em;
    margin: 0.5em 0.3em;
    min-width: 100px;
    padding: 0.5em 0.65em;
    border-radius: 0.5em;
    background-color: #e6e6e6;
    border: 1.2px solid ${props => props.blue ? "#000011" : "#821f03"};
    transition: all 0.1s ease-out;

    &:hover {
        color: #e6e6e6;
        background-color: ${props => props.blue ? "#000011" : "#821f03"};
    }
`;

class Point extends React.Component {
    render() {
        return (
            <StyledButton blue={this.props.blue}>
                <span className="point">
                    {this.props.children}
                </span>
            </StyledButton>
        )
    }
}

export default Point;