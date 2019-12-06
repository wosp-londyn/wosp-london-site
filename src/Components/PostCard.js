import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Button, Container, Col, Row } from 'react-bootstrap';
import PostPlaceholder from './PostPlaceholder';
import bg from '../Assets/Images/bg.png';

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
                <StyledRow>
                    <ImgWrapper md="6">
                        <Card.Img
                            variant="top"
                            src={post._embedded['wp:featuredmedia']['0'].source_url}
                        />
                    </ImgWrapper>
                    <BodyWrapper md="6">
                        <StyledCardBody>
                            <StyledCardTitle>{post.title.rendered}</StyledCardTitle>
                            <Date>{`${date.getDate()}.${date.getMonth() +
                                1}.${date.getFullYear()}`}</Date>
                            <CardText>
                                <div
                                    dangerouslySetInnerHTML={createMarkup(
                                        post.excerpt.rendered
                                    )}
                                />
                            </CardText>
                            <Button
                                variant="primary"
                                as={Link}
                                to={`/aktualnosci/artykuly/${post.slug}`}
                            >
                                Zobacz więcej
                            </Button>
                       </StyledCardBody>
                    </BodyWrapper>
                </StyledRow>
            </Container>
        </StyledCard>
    );
};
const StyledRow = styled(Row)`
    background: url(${bg});
    background-position: left bottom;
    background-size: 100%;
    background-color: #f0f0f0;
`;

const CardText = styled(Card.Text)`
     text-align: justify;
`;

const StyledCardTitle = styled(Card.Title)`
     text-align: left;
     font-weight: 700;
`;

const StyledCardBody = styled(Card.Body)`
     padding: 20px;

     ${({ theme }) => theme.media.above.md} {
        padding: 15px;
        height: 100%;
    }

`;

const BodyWrapper = styled(Col)`
     padding: 0;
     background: white;

     :last-child{
          text-align: right;
     }
`;

const ImgWrapper = styled(Col)`
    padding: 0;
    margin-top: auto !important;
    margin-bottom: auto !important;
`;

const StyledCard = styled(Card)`
    border: none;
    margin-bottom: 20px;
    box-shadow: 0px 7px 15px -5px #8f8f8f;
    background: white;
    margin-left: 0;

    img {
        width: 100% !important;
        height: auto !important;
        background:
    }

    ${({ theme }) => theme.media.above.md} {
        img {
             margin: 0;
        }
    }
`;

const Date = styled(Card.Text)`
    font-weight: 400;
    font-size: 14px;
    color: #6a6a6a;
    text-align: left;

`;

export default PostCard;
