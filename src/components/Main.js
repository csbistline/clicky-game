import React from 'react';
import Container from 'react-bootstrap/Container'
import Logo from './Logo'

const Main = (props) => {

    let logosArr = (props.logos);

    const randomizeLogos = () => {
        logosArr.sort((a, b) => {
            return 0.5 - Math.random()
        });
        console.log(logosArr);
    }

    const pickLogo = id => {
        console.log(id);
    }

    randomizeLogos()

    return (
        <Container className="d-flex flex-wrap justify-content-around">
            {logosArr.map(logo =>
                <div
                    className="m-2"
                    key={logo.id}
                    onClick={() => pickLogo(logo.id)}
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
