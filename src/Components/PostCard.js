import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

// Komponent wyświetlający posta na homepage
// Dostaje dane jako argument

const PostCard = ({ post }) => {
    const createMarkup = text => {
        return { __html: text };
    };

    return (
        <StyledCard as="article">
            <Card.Img
                variant="top"
                src={post._embedded['wp:featuredmedia']['0'].source_url}
            />
            <Card.Body>
                <Card.Title>{post.title.rendered}</Card.Title>
                <Date>{post.date}</Date>
                <Card.Text>
                    <div
                        dangerouslySetInnerHTML={createMarkup(
                            post.excerpt.rendered
                        )}
                    />
                </Card.Text>
                <Button
                    variant="primary"
                    as={Link}
                    to={`/artykuly/${post.slug}`}
                >
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
            max-height: 250px;
            width: auto;
            padding: 15px;
        }

        .card-body {
            width: 70%;
        }
    }
`;

const Date = styled(Card.Text)`
    font-weight: 400;
    font-size: 16px;
`;

export default PostCard;
