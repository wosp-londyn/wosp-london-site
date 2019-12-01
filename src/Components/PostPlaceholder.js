import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Card } from 'react-bootstrap';
import placeholder from '../Assets/Images/placeholderImg.jpg';

const PostPlaceholder = () => {
    return (
        <StyledCard>
            <Card.Img variant="top" src={placeholder} />
            <Card.ImgOverlay>
                <Loading>
                    <div />
                    <div />
                    <div />
                    <div />
                </Loading>
            </Card.ImgOverlay>
            <Card.Body>
                <Card.Title>
                    <Line />
                </Card.Title>
                <Card.Text>
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                </Card.Text>
                <Button />
            </Card.Body>
        </StyledCard>
    );
};

const Line = styled.div`
    width: 60%;
    height: 16px;
    margin: 5px auto 5px 0;
    border-radius: 10px;
    background: #ddd;
`;

const Button = styled.div`
    width: 20%;
    height: 25px;
    margin: 5px auto;
    border-radius: 10px;
    background: #ddd;
`;
const ldsEllipsis1 = keyframes` {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}`;

const ldsEllipsis3 = keyframes` {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
}`;

const ldsEllipsis2 = keyframes` {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(24px, 0);
    }
}
`;

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

const Loading = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    margin: 60px 200px;

    div {
        position: absolute;
        top: 33px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: #eee;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    div:nth-child(1) {
        left: 8px;
        animation: ${ldsEllipsis1} 0.6s infinite;
    }
    div:nth-child(2) {
        left: 8px;
        animation: ${ldsEllipsis2} 0.6s infinite;
    }
    div:nth-child(3) {
        left: 32px;
        animation: ${ldsEllipsis2} 0.6s infinite;
    }
    div:nth-child(4) {
        left: 56px;
        animation: ${ldsEllipsis3} 0.6s infinite;
    }
`;

export default PostPlaceholder;
