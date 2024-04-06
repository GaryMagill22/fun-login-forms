import React from "react";
import { MainContainer, Section, Label, Text } from "./styles";
import {Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material";



const StyledLink = styled(RouterLink)`
    display: flex;
    margin: 10px auto;
    width: fit-content;
    justify-content: center;
    background-color: darkblue;
    border: 1px solid darkblue;
    padding: 10px;
    border-radius: 10px;
    color: white;
    text-decoration: none;
    &:hover {
        text-decoration: none;
        background-color: lightblue;
        border: 1px solid darkblue;
        color: darkblue;
}
`;



const LoginForm = () => {
    return (
        <MainContainer>
            <Section>
                <Label htmlFor="username">Username:</Label><br></br>
                <input type="text" id="username" name="username" /><br></br>
                {/* <FormLabel>Confirm Password: </FormLabel><br></br>
                <input type="password" id="confirmPassword" name="confirmPassword" /><br></br> */}
                <StyledLink to="/piano" >Enter Password</StyledLink>
            <Text>Dont have an account?</Text><StyledLink to="/register" >Register</StyledLink>
            </Section>
        </MainContainer>
    );
};

export default LoginForm;
