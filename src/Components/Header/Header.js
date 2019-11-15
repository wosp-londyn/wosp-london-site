import React from 'react';
import styled from 'styled-components';
import { Container, Col, Row } from 'react-bootstrap';
import Menu from './Menu';
import SocialBar from '../SocialBar';
import Logo from '../Logo';

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <SocialBar />
                <Bar>
                    <Row>
                        <Col xs sm={2}>
                            <Logo />
                        </Col>
                        <Col
                            xs={{ span: 2, offset: 8 }}
                            sm={{ span: 8, offset: 2 }}
                        >
                            <Menu />
                        </Col>
                    </Row>
                </Bar>
            </Container>
        </Wrapper>
    );
};

const Bar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 70px;
    background: #222;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

const Wrapper = styled.header`
    background: ${({ theme }) => theme.color.bg};
`;

export default Header;
