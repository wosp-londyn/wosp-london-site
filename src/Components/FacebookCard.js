import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const FacebookCard = ({ name, text }) => {
    return (
        <StyledCard>
            <Card.Text>{name}</Card.Text>
            <Card.Body>{text}</Card.Body>
        </StyledCard>
    );
};

const StyledCard = styled(Card)`
    padding: 0;
    margin: 0;

    margin-top: 20px;
`;

export default FacebookCard;
