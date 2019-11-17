import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Footer = () => {
    return (
        <StyledContainer>
            <Row>
                <Col md={4}>LOGO DUŻE</Col>
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

    div {
        height: 200px;
        outline: black 1px solid;
    }
`;

export default Footer;
