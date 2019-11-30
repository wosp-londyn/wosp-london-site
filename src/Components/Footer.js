import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import heart from '../Assets/Images/logo132.png';
// import SocialMedia from './SocialMedia';

const Footer = () => {
    return (
        <StyledContainer fluid>
            <Container md="12">
                <StyledRow>
                    <StyledCol md="4">
                        <img src={heart} id="heart" alt="wosp logo" />
                    </StyledCol>
                    <StyledCol md="4">
                        <h2>KONTAKT</h2>

                        <p>WOŚP sztab w Londynie</p>
                        <p>e-mail loremipsum@lorem.pl</p>
                        <p>Polityka prywatności</p>
                    </StyledCol>
                    <StyledCol md="4">
                        <h2>KONTAKT</h2>

                        <p>WOŚP sztab w Londynie</p>
                        <p>e-mail loremipsum@lorem.pl</p>
                        <p>Polityka prywatności</p>
                    </StyledCol>
                </StyledRow>
            </Container>
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)`
    background: ${({ theme }) => theme.color.navyBlue};
    margin-top: 150px;
`;
const StyledRow = styled(Row)`
    padding: 15px 0 15px 0;

    div:nth-child(2) {
        border-top: 2px solid white;
        border-bottom: 2px solid white;
    }
    ${({ theme }) => theme.media.above.md} {
        padding: 30px 0 30px 0;

        div:nth-child(2) {
            border-top: 0;
            border-bottom: 0;
            border-left: 2px solid white;
            border-right: 2px solid white;
        }
    }
`;
const StyledCol = styled(Col)`
    color: white;
    text-align: center;
    padding: 20px 0 20px 0;
`;

export default Footer;
