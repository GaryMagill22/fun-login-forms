import { styled } from "@mui/material";




export const Main = styled("div")`
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    position: relative;
    top: 10vh;
    align-items: center;
    justify-content: center;
    text-align: center;
    // border: 3px solid green;

`;

export const Form = styled("form")`
    border: 1px solid white;
    border-radius: 10px;
    margin: 10px auto;
    padding: 15px;
    height: fit-content;
    width: 500px;
    // border: 3px solid blue;

`;


export const InputContainer = styled("div")`
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 0 auto;
    // border: 3px solid red;
    width: 200px;
    `;


export const SubmitContainer = styled("div")`
    display: flex;
    justify-content: center;

`;

export const Input = styled("input")`
    width: 200px;
    height: 20px;
    border-radius: 10px;
    padding: 5px;
    `;

    export const Button = styled("button")`
        display: flex;
        font-weight: 600;
        color: white;
        background-color: navy;
        border: 1px solid lightblue;
        border-radius: 10px;
        padding: 10px;
        width: 200px;
        font-size: 1rem;
        justify-content: center;
        margin: 10px;
    `;







