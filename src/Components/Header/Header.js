import React from 'react';
import styled from 'styled-components';
import { Container, Col, Row } from 'react-bootstrap';
import Menu from './Menu';

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Col sm={2} style={{ color: 'white' }}>
                        LOGO
                    </Col>
                    <Col sm={{ span: 8, offset: 2 }}>
                        <Menu />
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    background: #222;
    padding: 5px 0;
`;

export default Header;
