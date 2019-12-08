import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab } from 'react-bootstrap';
import PageTemplate from '../Templates/PageTemplate';

const ContentBlock = styled.div``;

const Stars = () => {
    return (
        <Tabs>
            <Tab eventKey="2k20" title="2020">
                <PageTemplate
                    slug="gwiazdy-2020"
                    ContentWrapper={ContentBlock}
                />
            </Tab>
            <Tab eventKey="2k19" title="2019">
                <PageTemplate
                    slug="gwiazdy-2019"
                    ContentWrapper={ContentBlock}
                />
            </Tab>
            <Tab eventKey="2k18" title="2018">
                <PageTemplate
                    slug="gwiazdy-2018"
                    ContentWrapper={ContentBlock}
                />
            </Tab>
            <Tab eventKey="2k17" title="2017">
                <PageTemplate
                    slug="gwiazdy-2017"
                    ContentWrapper={ContentBlock}
                />
            </Tab>
        </Tabs>
    );
};

export default Stars;
