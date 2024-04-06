import { styled } from "@mui/material";





export const MainContainer = styled("div")`
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    position: relative;
    top: 20vh;
    

`;

export const Section = styled("form")`
    border: 1px solid black;
    margin: 10px auto;
    padding: 25px;
    border-radius: 10px;
    width: 300px;
    background-color: #f3f0f6;
    align-items: center;
    justify-content: center;
    text-align: center;

`;



export const Label = styled("label")`
    font-size: 16px;
    color: black;
`;

export const Text = styled("p")`
    color: black;
`;