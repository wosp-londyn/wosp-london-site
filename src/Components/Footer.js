import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import heart from '../Assets/Images/logo132.png';

const Footer = () => {
    return (
        <StyledContainer>
            <Row>
                <Col md={4}>
                    <img src={heart} id="heart" alt="wosp logo" />
                </Col>

                <Col md={5} />

                <Col md={3}>Socjalmendja</Col>
            </Row>
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)`
    margin-top: 100px;
    background: white;
    outline: black 1px solid;
    
    /* background-color: ${({ theme }) => theme.color.navyBlue}; */

    div {
        width: 100%;
        height: 200px;
        outline: black 1px solid;
    } 
    
    #heart {
        margin-top: 5%;
        float: right;
  
    }
`;

export default Footer;
