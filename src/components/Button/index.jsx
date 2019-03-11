import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: ${props => props.dark ? "#000011" : "#9EA8C7"};
    color: ${props => props.dark ? "#9EA8C7" : "#000011"};
    font-size: 1em;
    text-decoration: none;
    margin: 1em;
    min-width: 200px;
    padding: 1em 3em;
    border: 1px solid ${props => props.dark ? "#9EA8C7" : "#000011"};
    transition: all 0.5s ease-out;

    & {
        display: inline-block;
    }
      
    &:after {
        content: '';
        width: 0px;
        height: 2px;
        display: block;
        background: ${props => props.dark ? "#9EA8C7" : "#000011"};
        transition: 0.5s;
    }
      
    &:hover:after {
        width: 100%;
    }
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