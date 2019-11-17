import React from 'react';
// import styled from 'styled-components';
import { Col, Row, Container } from 'react-bootstrap';
import {
    Slider,
    ButtonsToolbar,
    PostCardGrid,
    FacebookCardGrid,
} from '../Components';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <Slider />
                </Col>
            </Row>

            <Row>
                <Col sm={12}>
                    <ButtonsToolbar />
                </Col>
            </Row>
            <Row style={{ marginTop: '100px' }}>
                <Col md={12} xl={8} as="article">
                    <PostCardGrid />
                </Col>
                <Col md={12} xl={4} as="article">
                    <FacebookCardGrid />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
