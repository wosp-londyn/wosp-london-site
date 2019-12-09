import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab } from 'react-bootstrap';
import PageTemplate from '../Templates/PageTemplate';

const ContentBlock = styled.div``;

const Program = () => {
    return (
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
    );
};

const StyledTabs = styled(Tabs)`
    border-bottom: 2px solid #009FE3;
    color: white !important;
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

export default Program;
