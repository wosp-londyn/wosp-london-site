import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Button, Container, Col, Row } from 'react-bootstrap';
import PostPlaceholder from './PostPlaceholder';

// Komponent wyświetlający posta na homepage
// Dostaje dane jako argument

const PostCard = ({ post }) => {
    const createMarkup = text => {
        return { __html: text };
    };

    if (!post) {
        return <PostPlaceholder />;
    }

    const date = new window.Date(post.date);
    return (
        <StyledCard as="article">
            <Container>
                <Row>
                    <ImgWrapper lg="6">
                        <Card.Img
                            variant="top"
                            src={post._embedded['wp:featuredmedia']['0'].source_url}
                        />
                    </ImgWrapper>
                    <BodyWrapper lg="6">
                        <Card.Body>
                            <Card.Title>{post.title.rendered}</Card.Title>
                            <Date>{`${date.getDate()}.${date.getMonth() +
                                1}.${date.getFullYear()}`}</Date>
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
                                to={`/aktualnosci/artykuly/${post.slug}`}
                            >
                                Zobacz więcej
                            </Button>
                        </Card.Body>
                    </BodyWrapper>
                </Row>
            </Container>
        </StyledCard>
    );
};

const BodyWrapper = styled(Col)`

`;

const ImgWrapper = styled(Col)`
    background: #616161;
    padding: 0;
    margin-top: auto !important;
    margin-bottom: auto !important;
`;

const StyledCard = styled(Card)`
    border: none;

    img {
        width: 100% !important;
        height: auto !important;
    }

    ${({ theme }) => theme.media.above.md} {

        img {
        }

    }
`;

const Date = styled(Card.Text)`
    font-weight: 400;
    font-size: 16px;
`;

export default PostCard;
