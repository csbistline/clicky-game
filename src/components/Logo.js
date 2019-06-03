import React from 'react';
import Image from 'react-bootstrap/Image'

const Logo = (props) => {
    return (
        <Image src={props.image} 
        style={{width: '100px', height: '100px', boxShadow: "0 3px 6px #999, 0 3px 6px #999"}}
        roundedCircle />
    );
};

export default Logo;