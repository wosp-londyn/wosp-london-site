import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import transfergo from '../Assets/Images/Sponsors/transfergo.png';

// Buttons under slider - homepage

const ButtonsToolbar = () => {
    return (
        <Wrapper>
            <FirstRow>
                <Col xs={12} md={3}>
                    <Button id="button1" as={Link} to="/aktualnosci/galeria">
                        GALERIA
                    </Button>
                </Col>
                <Col xs={12} md={3}>
                    <Button id="button3" as={Link} to="/aktualnosci/live">
                        NA ŻYWO
                    </Button>
                </Col>
                <Col xs={12} md={3}>
                    <Button id="button2" as={Link} to="/wspieraj-nas/aukcje">
                        AUKCJE
                    </Button>
                </Col>
                <Col xs={12} md={3}>
                    <Button id="button4" as={Link} to="/informacje/program">
                        PROGRAM
                    </Button>
                </Col>
            </FirstRow>
            <SecondRow>
                <Button
                    id="button5"
                    as={Link}
                    to="/wspieraj-nas/wplac-na-wosp"
                    // as="a"
                    // href="https://www.wosp.org.pl/final/dla-wolontariuszy"
                    // rel="noreferrer noopener"
                    // target="_blank"
                >
                    <ButtonRow xs={12}>
                        <Col xs={6} md={12} className="align-self-center">
                            WPŁAĆ NA WOŚP
                        </Col>
                        <Col xs={6} md={3} className="align-self-center">
                            <p>Powered by</p>
                            <img src={transfergo} alt="" />
                        </Col>
                    </ButtonRow>
                </Button>
            </SecondRow>
        </Wrapper>
    );
};
const ButtonRow = styled(Row)`
    div:first-child {
        text-align: right;
        padding-right: 0;
        ${({ theme }) => theme.media.above.md} {
            text-align: center;
        }
    }
    div:nth-child(2) {
        width: auto;
        padding-left: 25px;
        text-align: left;
        font-size: 10px;
        font-weight: 400;
        p {
            margin: 0;
        }

        ${({ theme }) => theme.media.above.sm} {
            padding-left: 20px;
        }
        ${({ theme }) => theme.media.above.md} {
            display: inline;
            padding-left: 0;
            position: absolute;
            bottom: 60px;
            left: 490px;
        }
        ${({ theme }) => theme.media.above.lg} {
            left: 730px;
            bottom: 65px;
        }
        ${({ theme }) => theme.media.above.xl} {
            left: 890px;
            bottom: 45px;
        }
    }
    img {
        max-width: 150px !important;
        padding-top: 2px;
        ${({ theme }) => theme.media.above.sm} {
            max-width: 180px !important;
        }
        ${({ theme }) => theme.media.above.md} {
            max-width: 200px !important;
        }
        ${({ theme }) => theme.media.above.xl} {
            max-width: 220px !important;
        }
    }
`;
const StyledRow = styled(Row)`
    width: 100%;
    margin: 0;

    a {
        border: none;

        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;

        border-radius: 0;

        text-transform: uppercase;
        font-weight: 700;
        font-size: 16px;
        ${({ theme }) => theme.media.above.sm} {
            font-size: 20px;
        }
        ${({ theme }) => theme.media.above.md} {
            font-size: 18px;
        }

        ${({ theme }) => theme.media.above.lg} {
            font-size: 19px;
        }

        ${({ theme }) => theme.media.above.xl} {
            font-size: 20px;
        }
    }
    #button1 {
        background-color: ${({ theme }) => theme.color.blue};
        :hover {
            filter: brightness(110%);
            transition: all 0.2s ease;
        }
        :active {
            filter: brightness(95%);
        }
    }
    #button2 {
        background-color: ${({ theme }) => theme.color.orange};
        :hover {
            filter: brightness(110%);
            transition: all 0.2s ease;
        }
        :active {
            filter: brightness(95%);
        }
    }
    #button3 {
        background-color: ${({ theme }) => theme.color.red};
        :hover {
            filter: brightness(110%);
            transition: all 0.2s ease;
        }
        :active {
            filter: brightness(95%);
        }
    }
    #button4 {
        background-color: ${({ theme }) => theme.color.pink};
        :hover {
            filter: brightness(110%);
            transition: all 0.2s ease;
        }
        :active {
            filter: brightness(95%);
        }
    }
    #button5 {
        background-color: ${({ theme }) => theme.color.green};
        :hover {
            background-color: #91be12;
        }
        :active {
            background-color: #7da40f;
        }

        ${({ theme }) => theme.media.above.sm} {
            height: 100px;
        }
        ${({ theme }) => theme.media.above.md} {
            height: 100px;
        }
        ${({ theme }) => theme.media.above.lg} {
            height: 100px;
        }
    }
`;

const FirstRow = styled(StyledRow)`
    div {
        padding: 0;
        height: 70px;

        ${({ theme }) => theme.media.above.sm} {
            height: 100px;
        }

        ${({ theme }) => theme.media.above.lg} {
            height: 120px;
        }

        ${({ theme }) => theme.media.above.xl} {
            height: 140px;
        }
    }
`;

const SecondRow = styled(StyledRow)`
    margin: 0;
    background-color: ${({ theme }) => theme.color.green};

    img {
        width: 100%;
    }

    ${({ theme }) => theme.media.above.md} {
        margin: 30px 0 40px;
    }
    ${({ theme }) => theme.media.above.lg} {
        margin: 17px 0 50px;
    }
    ${({ theme }) => theme.media.above.xl} {
        margin: 21px 0 30px;
    }
`;

const Wrapper = styled.div`
    padding: 14px 0 25px;

    ${({ theme }) => theme.media.above.sm} {
        padding: 55px 0 65px;
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
