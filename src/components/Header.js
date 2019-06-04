import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Header = () => {
    return (
        <Jumbotron fluid
        style={{
            backgroundImage: "url('./assets/img/bg.jpg')", 
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}>
            <Container className="text-white">
                    <h1 className="text-center">Baseball Logo Memory</h1>
                    <p className="lead text-center ">
                        Click on a team logo to earn points, but don't click on any more than once!
                </p>
            </Container>
        </Jumbotron>
    );
};

export default Header;