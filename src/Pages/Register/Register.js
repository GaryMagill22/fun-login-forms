import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Main, Form, InputContainer, SubmitContainer, Input, Button } from "./styles";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material";



const StyledLink = styled(RouterLink)`
    display: flex;
    margin: 10px auto;
    width: fit-content;
    justify-content: center;
    background-color: salmon;
    border: 1px solid salmon;
    padding: 10px;
    font-weight: 600;
    border-radius: 10px;
    color: black;
    text-decoration: none;
    &:hover {
        text-decoration: none;
        background-color: lightblue;
        border: 1px solid darkblue;
        color: darkblue;
}
`;


const Register = () => {

    const [errors, setErrors] = useState({});

    const location = useLocation();

    const passwordFromPiano = location.state?.originalPassword;



    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const [formInfo, setFormInfo] = useState({
        firstName: sessionStorage.getItem('firstName') || "",
        lastName: sessionStorage.getItem('lastName') || "",
        email: sessionStorage.getItem('email') || "",
        username: sessionStorage.getItem('username') || "",
        password: "",  // Password shouldn't be stored in sessionStorage for security reasons
        confirmPassword: ""
    });

    // Load data from localStorage when the component mounts
    useEffect(() => {
        const savedFormInfo = sessionStorage.getItem('formInfo');
        if (savedFormInfo) {
            setFormInfo(JSON.parse(savedFormInfo));
        }
    }, []);

    // Save to sessionStorage whenever formInfo changes
    useEffect(() => {
        sessionStorage.setItem('formInfo', JSON.stringify(formInfo));
    }, [formInfo]);



    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormInfo(prev => ({ ...prev, [name]: value }));
        sessionStorage.setItem(name, value);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Reset Error Messages
        setErrors({});

        // Create local variable to store potential errors
        let validationErrors = {};

        // Check for empty fields
        Object.keys(formInfo).forEach(key => {
            if (!formInfo[key]) {
                validationErrors[key] = `${key[0].toUpperCase() + key.slice(1)} is required`; // Capitalize the first letter
            }
        });

        // Validate email format if email exists
        if (formInfo.email && !/\S+@\S+\.\S+/.test(formInfo.email.trim())) {
            validationErrors.email = "Please enter a valid email address";
        }

        // Validate password length if password exists
        if (formInfo.password && formInfo.password.trim().length < 8) {
            validationErrors.password = "Password must be at least 8 characters";
        }

        // If there are any errors, stop the function and display them
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsLoading(false);
            return;
        }
        navigate('/');
    };


    return (
        <Main>
            <div>
                <h2>
                    Register your account
                </h2>
            </div>

            <div>
                <Form onSubmit={submitHandler}>
                    <InputContainer>
                        <label htmlFor="firstName" >
                            First Name:
                        </label>
                        <Input
                            name="firstName"
                            type="text"
                            autoComplete="given-name"
                            value={formInfo.firstName}
                            // value={formInfo.firstName}
                            onChange={changeHandler}
                        />
                        {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="lastName" >
                            Last Name:
                        </label>
                        <Input
                            name="lastName"
                            type="text"
                            value={formInfo.lastName}
                            onChange={changeHandler}
                        />
                        {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="email" >
                            Email:
                        </label>
                        <Input
                            name="email"
                            type="email"
                            value={formInfo.email}
                            onChange={changeHandler}
                        />
                        <div>
                            {errors.email && <p style={{ color: "red" }} >{errors.email}</p>}
                        </div>
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="username">
                            Username:
                        </label>
                        <Input
                            name="username"
                            type="text"
                            value={formInfo.username}
                            onChange={changeHandler}
                        />
                        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
                    </InputContainer>

                    <InputContainer>
                        <StyledLink to="/piano/create">Create Password</StyledLink>
                    </InputContainer>
                    <label htmlFor="password">Password:</label>
                    <p className="piano-password">{passwordFromPiano ? passwordFromPiano : "No password created."}</p>
                    {/* <InputContainer>
                    <StyledLink to="/piano/confirm">Confirm Password</StyledLink>
                        {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}
                    </InputContainer> */}

                    <SubmitContainer>
                        <Button
                        >
                            Register
                        </Button>
                    </SubmitContainer>
                    <div >
                        <Link to="/" >
                            Back
                        </Link>
                    </div>

                </Form>


            </div>
        </Main>

    )
}

export default Register;