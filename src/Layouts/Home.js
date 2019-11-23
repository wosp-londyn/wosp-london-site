import React from 'react';
import styled from 'styled-components';
import { Col, Row, Container } from 'react-bootstrap';
import {
    Slider,
    ButtonsToolbar,
    PostCardGrid,
    FacebookCardGrid,
} from '../Components';

const Home = () => {
    return (
        <>
            <Wrapper>
                <ShadowBox>
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Slider />
                            </Col>
                        </Row>
                    </Container>
                </ShadowBox>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <ButtonsToolbar />
                        </Col>
                    </Row>
                </Container>
            </Wrapper>

            <Container>
                <Row>
                    <Col md={12} xl={8} as="article">
                        <PostCardGrid />
                    </Col>
                    <Col md={12} xl={4} as="article">
                        <FacebookCardGrid />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

const Wrapper = styled.div`
    background: pink;
    width: 100%;
    margin: 0;
    padding: 0;
    ${({ theme }) => theme.media.above.md} {
        padding-top: 50px;
    }
`;

const ShadowBox = styled.div`
    display: none;
    ${({ theme }) => theme.media.above.md} {
        display: block;
        background-color: rgba(0, 0, 0, 0.5);
    }
`;

export default Home;
