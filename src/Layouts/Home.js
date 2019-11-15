import React from 'react';
// import styled from 'styled-components';
import { Col, Row, Container } from 'react-bootstrap';
import { Logo, Slider } from '../Components';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <Slider />
                </Col>
            </Row>
            <Row>
                <Col sm={{ span: 4, offset: 4 }}>
                    <Logo />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
