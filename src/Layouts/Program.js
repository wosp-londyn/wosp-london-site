import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab } from 'react-bootstrap';
import PageTemplate from '../Templates/PageTemplate';

const ContentBlock = styled.div``;

const Program = () => {
    return (
        <Tabs>
            <Tab eventKey="adults" title="Dorośli">
                <PageTemplate
                    slug="program-dorosli"
                    ContentWrapper={ContentBlock}
                />
            </Tab>
            <Tab eventKey="kids" title="Dzieci">
                <PageTemplate
                    slug="program-dzieci"
                    ContentWrapper={ContentBlock}
                />
            </Tab>
            <Tab eventKey="events" title="Eventy">
                <PageTemplate
                    slug="imprezy-dodatkowe"
                    ContentWrapper={ContentBlock}
                />
            </Tab>
        </Tabs>
    );
};

export default Program;
