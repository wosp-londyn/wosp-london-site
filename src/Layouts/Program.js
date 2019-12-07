import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import PageTemplate from '../Templates/PageTemplate';

const Program = () => {
    return (
        <Tabs>
            <Tab eventKey="adults" title="Dorośli">
                <PageTemplate slug="program-dorosli" />
            </Tab>
            <Tab eventKey="kids" title="Dzieci">
                <PageTemplate slug="program-dzieci" />
            </Tab>
            <Tab eventKey="events" title="Eventy">
                <PageTemplate slug="imprezy-dodatkowe" />
            </Tab>
        </Tabs>
    );
};

export default Program;
