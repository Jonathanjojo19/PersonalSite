import React from "react";
import styled from "styled-components";
import { Link as RLink } from "react-router-dom";

const RouterLink = styled(RLink)`
    &,
    color: white;
    text-decoration:underline;
    text-decoration-color: grey;

    &:visited {
        color: white;
        text-decoration-color: grey;
    }
    &:hover {
        text-decoration-color: white;
        transition: text-decoration 0.3s ease-out;
    }
`;

export default ({ label, target}) => {
    return <RouterLink to={target}>{label}</RouterLink>;
};
