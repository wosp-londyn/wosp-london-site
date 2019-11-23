import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';

// Buttons under slider - homepage

const ButtonsToolbar = () => {
    return (
        <Wrapper>
            <StyledRow>
                <Col xs={12} md={3}>
                    <Button id="button1" as={Link} to="/live">
                        Galeria
                    </Button>
                </Col>
                <Col xs={12} md={3}>
                    <Button id="button2" as={Link} to="/zostan-wolontariuszem">
                        Aukcje
                    </Button>
                </Col>
                <Col xs={12} md={3}>
                    <Button id="button3" as={Link} to="/aukcje">
                        Na żywo
                    </Button>
                </Col>
                <Col xs={12} md={3}>
                    <Button id="button4" as={Link} to="/wplac-na-wosp">
                        Wpłać na WOŚP
                    </Button>
                </Col>
            </StyledRow>
            <SecondRow>
                <Col xs={12} md={12}>
                    <Button id="button5" as={Link} to="/wplac-na-wosp">
                        Zostań wolontariuszem
                    </Button>
                </Col>
            </SecondRow>
        </Wrapper>
    );
};

const StyledRow = styled(Row)`
    width: 100%;
    margin: 0;

    div {
        padding: 0;
        height: 70px;

        ${({ theme }) => theme.media.above.sm} {
            height: 100px;
        }

        ${({ theme }) => theme.media.above.lg} {
            height: 128px;
        }

        ${({ theme }) => theme.media.above.xl} {
            height: 155px;
        }
    }

    a {
        border: none;

        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;

        border-radius: 0;

        text-transform: uppercase;

        ${({ theme }) => theme.media.above.sm} {
            font-size: 24px;
        }
        ${({ theme }) => theme.media.above.md} {
            font-size: 19px;
        }

        ${({ theme }) => theme.media.above.lg} {
            font-size: 25px;
        }

        ${({ theme }) => theme.media.above.xl} {
            font-size: 25px;
        }
    }
    #button1 {
        background-color: ${({ theme }) => theme.color.blue};
    }
    #button2 {
        background-color: ${({ theme }) => theme.color.orange};
    }
    #button3 {
        background-color: ${({ theme }) => theme.color.red};
    }
    #button4 {
        background-color: ${({ theme }) => theme.color.green};
    }
    #button5 {
        background-color: ${({ theme }) => theme.color.pink};
        ${({ theme }) => theme.media.above.md} {
            height: 45px;
        }

        ${({ theme }) => theme.media.above.lg} {
            height: 66px;
        }
    }
`;

const SecondRow = styled(StyledRow)`
    margin: 0;

    ${({ theme }) => theme.media.above.md} {
        margin: 30px 0 0;
    }
    ${({ theme }) => theme.media.above.lg} {
        margin: 17px 0 0;
    }
    ${({ theme }) => theme.media.above.xl} {
        margin: 21px 0 0;
    }
`;

const Wrapper = styled.div`
    padding: 14px 0 0;

    ${({ theme }) => theme.media.above.sm} {
        padding: 55px 0 0;
    }
    ${({ theme }) => theme.media.above.md} {
        padding: 28px 0 0;
    }
    ${({ theme }) => theme.media.above.lg} {
        padding: 22px 0 0;
    }
    ${({ theme }) => theme.media.above.xl} {
        padding: 20px 0 0;
    }
`;

export default ButtonsToolbar;
