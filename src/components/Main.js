import React from 'react';
import Container from 'react-bootstrap/Container'
import Logo from './Logo'

const Main = props => {

    let logosArr = props.randomizeLogos(props.logos);

    return (
        <Container className="d-flex flex-wrap justify-content-around">
            {logosArr.map(logo =>
                <div
                    className="m-2"
                    key={logo.id}
                    onClick={() => props.pickLogo(logo.id)}
                >
                    <Logo
                        id={logo.id}
                        key={logo.id}
                        image={logo.image}
                    />
                </div>
            )}
        </Container>
    );
};

export default Main;