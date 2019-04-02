import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledButtonLink = styled(Link)`
    background: ${props => props.dark ? "#000011" : "#9EA8C7"};
    color: ${props => props.dark ? "#9EA8C7" : "#000011"};
    font-size: 1em;
    text-decoration: none;
    margin: 1em;
    min-width: 200px;
    padding: 1em 3em;
    border: 1px solid ${props => props.dark ? "#9EA8C7" : "#000011"};
    transition: all 0.5s ease-out;
    cursor: pointer;
    & {
        display: inline-block;
    }
      
    &:after {
        content: '';
        width: 100%;
        height: 2px;
        display: block;
        background: ${props => props.dark ? "#9EA8C7" : "#000011"};
        transition: 0.5s;
        transform-origin: 50% 50%;
        transform: scale(0,1);
    }
      
    &:hover:after {
        width: 100%;
        transform: scale(1,1);
    }
`;

const StyledButtonA = styled.a`
    background: ${props => props.dark ? "#000011" : "#9EA8C7"};
    color: ${props => props.dark ? "#9EA8C7" : "#000011"};
    font-size: 1em;
    text-decoration: none;
    margin: 1em;
    min-width: 200px;
    padding: 1em 3em;
    border: 1px solid ${props => props.dark ? "#9EA8C7" : "#000011"};
    transition: all 0.5s ease-out;
    cursor: pointer;
    & {
        display: inline-block;
    }
      
    &:after {
        content: '';
        width: 100%;
        height: 2px;
        display: block;
        background: ${props => props.dark ? "#9EA8C7" : "#000011"};
        transition: 0.5s;
        transform-origin: 50% 50%;
        transform: scale(0,1);
    }

    &:hover {
        text-decoration: none;
    }
      
    &:hover:after {
        width: 100%;
        transform: scale(1,1);
        text-decoration: none;
    }
`;


class Button extends React.Component {
    render() {
        if (this.props.external) {
            return (
                <StyledButtonA href={this.props.href} target="_blank" rel="noopener noreferrer">
                    {this.props.children}
                </StyledButtonA>
            )
        } else{
            return (
                <StyledButtonLink
                    dark={this.props.dark} 
                    to={this.props.to} 
                    spy={this.props.spy}
                    smooth={this.props.smooth} 
                    offset={this.props.offset} 
                    duration={this.props.duration}
                    href={this.props.href}
                    style={this.props.style}
                    target={this.props.target}
                    rel={this.props.rel}
                    external={this.props.external}
                >
                    {this.props.children}
                </StyledButtonLink>
            )
        }
    }
}

export default Button;