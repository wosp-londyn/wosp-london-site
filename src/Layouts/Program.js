import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Tabs, Tab, Button } from 'react-bootstrap';
import PageTemplate from '../Templates/PageTemplate';

const ContentBlock = styled.div`
    .wp-block-button__link {
        border-radius: 0;
        border: none;
        width: 100px;
        height: 40px;
        margin: 0 auto 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${({ theme }) => theme.color.pink};

        transition: opacity 0.2s ease-in-out;
        :hover {
            text-decoration: none;
            color: white;
            opacity: 90%;
            background-color: ${({ theme }) => theme.color.pink};
        }

        text-align: center;
        color: white;
        text-decoration: none;
        font-size: 14px;
        font-weight: bold;
        ${({ theme }) => theme.media.above.xl} {
            font-size: 16px;
        }
    }
`;

const Program = () => {
    return (
        <>
            <Helmet>
                <title>WOŚP Londyn - Program</title>
                <meta
                    name="description"
                    content="WOŚP Londyn - Program. Zobacz kto z nami zagra! Atrakcje na tegorocznym WOŚPie! Dołącz do nas! - Gramy do końca świata i o jeden dzień dłużej!"
                />
                <meta
                    name="keywords"
                    content="WOŚP, WOŚP 2020, WOŚP Londyn, WOŚP Anglia, WOŚP Wielka Brytania, zbiórka pieniędzy Londyn, WOŚP London, WOŚP Great Britain, WOŚP England, WOŚP informacje, WOŚP Londyn informacje, WOŚP London informations, WOŚP gwiazdy, WOŚP kto zagra, WOŚP Londyn kto gra, zespoły WOŚP Londyn, WOŚP program, WOŚP Londyn program, WOŚP Londyn rozpiska, WOŚP Londyn kiedy "
                />
            </Helmet>
            <StyledTabs>
                <StyledTab eventKey="adults" title="DOROŚLI">
                    <PageTemplate
                        slug="program-dorosli"
                        ContentWrapper={ContentBlock}
                    />
                </StyledTab>
                <StyledTab eventKey="kids" title="DZIECI">
                    <PageTemplate
                        slug="program-dzieci"
                        ContentWrapper={ContentBlock}
                    />
                </StyledTab>
                <StyledTab eventKey="events" title="EVENTY">
                    <PageTemplate
                        slug="imprezy-dodatkowe"
                        ContentWrapper={ContentBlock}
                    />
                </StyledTab>
            </StyledTabs>
        </>
    );
};

const StyledTabs = styled(Tabs)`
    border-bottom: 2px solid #009fe3;
    color: white !important;
    margin-bottom: 15px;

    .nav-item {
        margin-bottom: 0;
    }
    .nav-item:hover {
        background-color: #bdecff !important;
    }

    .nav-item.nav-link.active {
        background-color: #009fe3 !important;
        color: white;
    }

    a {
        border: none !important;
        border-radius: 0 !important;
        color: #2f2f2f;
    }
`;

const StyledTab = styled(Tab)`
    border: none !important;
    background: black;
`;

export default Program;
