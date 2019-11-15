import React from 'react';
import styled from 'styled-components';
import logo from '../Assets/Images/logo.svg';

const Logo = () => (
    <div>
        <Img src={logo} alt="logo" />
    </div>
);

const Img = styled.img`
    height: 60px;
    padding: 0;
    margin: 0 0 0 20px;
`;

export default Logo;
