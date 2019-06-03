import React from 'react';
import Container from 'react-bootstrap/Container'
import Logo from './Logo'

const Main = (props) => {
    return (
        <Container className="d-flex justify-content-around">
            {props.logos.map(logo =>
                <Logo
                    id={logo.id}
                    key={logo.id}
                    image={logo.image}
                />
            )}
        </Container>
    );
};

export default Main;