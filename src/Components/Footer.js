import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import heart from '../Assets/Images/logo132.png';

const Footer = () => {
    return (
        <StyledContainer fluid>
            <Row>
                <Col md={4}>
                    <StyleImg>
                        <img src={heart} id="heart" alt="wosp logo" />
                    </StyleImg>
                </Col>

                <Col md={5}> </Col>

                <Col md={3}>Socjalmendja</Col>
            </Row>
            <Row>
                <Col>
                    <p>Copyright HARDCODE dla Wośp Londyn</p>
                </Col>
            </Row>
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)`
    margin-top: 100px;
    background: white;
    outline: pink 1px solid;
    /* background-color: ${({ theme }) => theme.color.navyBlue}; */

    div {
        outline: black px solid;
    } 

`;

const StyleImg = styled.div`
    float: right;
    outline: green 1px solid;
`;

export default Footer;
