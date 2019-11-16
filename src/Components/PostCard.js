import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

import cheese from '../Assets/Images/cheese.png';

const PostCard = ({ title, text }) => {
    return (
        <StyledCard>
            <Card.Img variant="top" src={cheese} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button variant="primary">Zobacz więcej</Button>
            </Card.Body>
        </StyledCard>
    );
};

const StyledCard = styled(Card)`
    display: flex !important;
    flex-direction: row !important;
    margin-top: 20px;

    img {
        width: 50%;
        padding: 15px;
    }
`;

PostCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    // img: PropTypes.string.isRequired,
};

export default PostCard;
