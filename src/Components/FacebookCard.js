import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

// Komponent wyświetlający treść facebookowego posta

const FacebookCard = () => {
    return (
        <StyledCard>
            <Main>
                <Col>
                    <Row>
                        <Col md={3}>
                            <img
                                src="https://www.fillmurray.com/60/60"
                                alt=""
                            />
                        </Col>
                        <HeadInfoCol md={9}>
                            <Row>
                                <Col>
                                    <a href="https://www.facebook.com/wosplondyn">
                                        WOŚP - Londyn
                                    </a>
                                </Col>
                            </Row>
                            <Row>
                                <Col>23 grudnia o 15:05</Col>
                            </Row>
                        </HeadInfoCol>
                    </Row>
                    <Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Iure veritatis aspernatur vel repudiandae odio
                        reiciendis deserunt odit reprehenderit minima cupiditate
                        unde quia porro, culpa eius nemo ea facere ducimus
                        rerum!
                    </Text>
                </Col>
            </Main>
            <ActionsRow>
                <Col>
                    <Row>
                        <Col>22 polubień</Col>
                        <Col>7 komentarzy</Col>
                    </Row>
                    <Row>
                        <Col>Lubię to</Col>
                        <Col>Komentarz</Col>
                        <Col>Udostępnij</Col>
                    </Row>
                </Col>
            </ActionsRow>
        </StyledCard>
    );
};

const StyledCard = styled(Card)`
    margin: 0;
    padding: 0;

    border: 1px solid #bfbfbf;
    border-radius: 5px;
    margin-top: 15px;

    img {
        border-radius: 50%;
    }
`;

const ActionsRow = styled(Row)`
    background-color: #ebebeb;
    color: ${({ theme }) => theme.color.cyan};
    font-size: 16px;
    margin: 0;
`;

const HeadInfoCol = styled(Col)`
    text-align: left;
`;

const Text = styled(Card.Text)`
    padding-top: 10px;
    text-align: justify;
    line-height: 17px;
    font-size: 14px;
    font-weight: 400;
`;

const Main = styled(Row)`
    padding: 12px 19px 10px;
`;

export default FacebookCard;
