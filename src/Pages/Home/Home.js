import React from 'react';
import LoginForm from '../../Components/Login/LoginForm.js';
import { WelcomeContainer, Text, Container } from './styles.js';

const Home = () => {
    return (
        <div>
            <WelcomeContainer>
            <Text>
                Welcome!
            </Text>
            <Container>
            <p>Please enter your username and password to continue...</p>
            </Container>
            </WelcomeContainer>

            <LoginForm />
        </div>

    );
}

export default Home;