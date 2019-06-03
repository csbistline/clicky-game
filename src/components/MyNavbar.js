import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const MyNavbar = (props) => {
    return (
        <div>
        <Navbar bg="light" variant="light" fixed="top">
            <Navbar.Brand href="#home" className="mr-auto">
                <img
                    alt=""
                    src="./assets/img/mlb-logo.png"
                    height="30"
                    className="d-inline-block align-top mr-2"
                />
                {'Memory'}
            </Navbar.Brand>
            <Nav className="mr-auto">
                {props.message}
            </Nav>
            <Nav>Score: {props.correct} | Top Score: {props.topScore} </Nav>
        </Navbar>
    </div>
    );
};

export default MyNavbar;
