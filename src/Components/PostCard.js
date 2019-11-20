import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

// Komponent wyświetlający posta na homepage
// Dostaje dane jako argumeny

const PostCard = ({ title, text, img, slug }) => {
    return (
        <StyledCard>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button variant="primary" as={Link} to={slug}>
                    Zobacz więcej
                </Button>
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
    slug: PropTypes.string.isRequired,
};

export default PostCard;
