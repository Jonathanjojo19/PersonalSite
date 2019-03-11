import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    background-color: ${props => props.dark ? "#000011" : "#e6e6e6"}
    padding: 20vh 15vw 5vh 15vw;
    align-items: center;
    justify-content: center;
    text-align: ${props => props.align};
    min-width: 100vw;
    max-width: 100vw;
    min-height: ${props => props.height}vh;
`;

class Wrapper extends React.Component {
    render() {
        return (
            <StyledWrapper id={this.props.id} dark={this.props.dark} height={this.props.height} align={this.props.align}>
                {this.props.children}
            </StyledWrapper>
        )
    }
}

export default Wrapper;