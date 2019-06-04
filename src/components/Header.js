import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Header = () => {
    return (
        <Jumbotron 
        fluid
        className="pb-1"
        style={{
            backgroundImage: "url('./assets/img/bg.jpg')", 
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}>
            <div className="align-content-middle">
            <Container className="text-white">
                    <h1 className="text-center">Baseball Logo Memory</h1>
                    <p className="lead text-center ">
                        Click on a team logo to earn points, but don't click on any more than once!
                </p>
            </Container>
            </div>
        </Jumbotron>
    );
};

export default Header;