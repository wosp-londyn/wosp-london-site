import React from 'react';
import styled from 'styled-components';
import { Container, Col, Row } from 'react-bootstrap';
import Menu from './Menu';
import SocialBar from '../SocialBar';

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <SocialBar />
                <Bar>
                    <Row>
                        <Col xs sm={2} style={{ color: 'white' }}>
                            LOGO
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

    padding: 0 0 0 40px;
    height: 70px;
    background: #222;
`;

const Wrapper = styled.header`
    background: ${({ theme }) => theme.color.bg};
`;

export default Header;
