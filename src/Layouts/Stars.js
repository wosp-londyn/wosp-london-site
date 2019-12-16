import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Tabs, Tab } from 'react-bootstrap';
import PageTemplate from '../Templates/PageTemplate';

const ContentBlock = styled.div``;

const Stars = () => {
    return (
        <>
            <Helmet>
                <title>WOŚP Londyn - Gwiazdy</title>
                <meta
                    name="description"
                    content="WOŚP Londyn - Gwiazdy. Zobacz kto z nami zagra! Gwiazdy tegorocznego WOŚPu! Dołącz do nas! - Gramy do końca świata i o jeden dzień dłużej!"
                />
                <meta
                    name="keywords"
                    content="WOŚP, WOŚP 2020, WOŚP Londyn, WOŚP Anglia, WOŚP Wielka Brytania, zbiórka pieniędzy Londyn, WOŚP London, WOŚP Great Britain, WOŚP England, WOŚP informacje, WOŚP Londyn informacje, WOŚP London informations, WOŚP gwiazdy, WOŚP kto zagra, WOŚP Londyn kto gra, zespoły WOŚP Londyn "
                />
            </Helmet>
            <StyledTabs>
                <StyledTab eventKey="2k20" title="2020">
                    <PageTemplate
                        slug="gwiazdy-2020"
                        ContentWrapper={ContentBlock}
                    />
                </StyledTab>
                <StyledTab eventKey="2k19" title="2019">
                    <PageTemplate
                        slug="gwiazdy-2019"
                        ContentWrapper={ContentBlock}
                    />
                </StyledTab>
                <StyledTab eventKey="2k18" title="2018">
                    <PageTemplate
                        slug="gwiazdy-2018"
                        ContentWrapper={ContentBlock}
                    />
                </StyledTab>
                <StyledTab eventKey="2k17" title="2017">
                    <PageTemplate
                        slug="gwiazdy-2017"
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
    font-weight: 700;
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

export default Stars;
