import React from 'react';
// import styled from 'styled-components';
import { Col, Row, Container } from 'react-bootstrap';
import { Slider, ButtonsToolbar } from '../Components';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <Slider />
                </Col>
                <Col sm={12}>
                    <ButtonsToolbar />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
