import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: ${props => props.dark ? "#000011" : "#9EA8C7"};
    color: ${props => props.dark ? "#9EA8C7" : "#000011"};
    font-size: 1em;
    text-decoration: none;
    margin: 1em;
    min-width: 200px;
    padding: 1em 2.5em;
    border: 1px solid ${props => props.dark ? "#9EA8C7" : "#000011"};
    transition: all 0.3s ease-out;
`;

class Button extends React.Component {
    render() {
        return (
            <StyledButton dark={this.props.dark}>
                {this.props.children}
            </StyledButton>
        )
    }
}

export default Button;