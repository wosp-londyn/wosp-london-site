import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab } from 'react-bootstrap';
import PageTemplate from '../Templates/PageTemplate';

const ContentBlock = styled.div``;

const Stars = () => {
    return (
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
    );
};

const StyledTabs = styled(Tabs)`
    border-bottom: 2px solid #009FE3;
    color: white !important;
    font-weight: 700;
    margin-bottom: 15px;

    .nav-item{
        margin-bottom: 0;
    }
    .nav-item:hover{
        background-color: #bdecff !important;
    }

    .nav-item.nav-link.active{
        background-color: #009FE3 !important;
        color: white;
    }

    a{
        border: none !important;
        border-radius: 0 !important;
        color: #2f2f2f;
    }

    a:active{

    }
`;

const StyledTab = styled(Tab)`
    border: none !important;
    background: black;
`;

export default Stars;
