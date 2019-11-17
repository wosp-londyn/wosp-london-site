import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

const PostCard = ({ title, text, img }) => {
    return (
        <StyledCard>
            <Card.Img variant="top" src={img} />
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
    flex-direction: column !important;

    border: none;

    img {
        width: 100%;
        height: auto;
        padding: 15px;
    }

    ${({ theme }) => theme.media.above.md} {
        flex-direction: row !important;
        margin-top: 5px;

        img {
            height: 100%;
            width: auto;
            padding: 15px;
        }

        .card-body {
            width: 70%;
        }
    }
`;

PostCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};

export default PostCard;
