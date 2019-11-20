import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

// Komponent wyświetlający treść facebookowego posta

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

    border: none;
    margin-top: 5px;
`;

export default FacebookCard;
