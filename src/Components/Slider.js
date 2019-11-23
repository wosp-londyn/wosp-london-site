import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

// Slider is based on bootstrap-component: Carousel

const Slider = () => {
    return (
        <StyledCarousel>
            <Carousel.Item>
                <img
                    src="https://picsum.photos/seed/276/1150/450?grayscale"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="https://picsum.photos/seed/666/1150/450?grayscale"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="https://picsum.photos/seed/432/1150/450?grayscale"
                    alt="Thrid slide"
                />
            </Carousel.Item>
        </StyledCarousel>
    );
};

const StyledCarousel = styled(Carousel)`
    margin: 0px 0 0;
    & span {
        height: 40px;
        width: 40px;
        opacity: 0.3;
    }
    & span :hover {
        height: 40px;
        width: 40px;
        opacity: 1;
    }

    & .carousel-indicators li {
        background-color: #bdbdbd;
        border: 3px solid #bdbdbd;
        height: 12px;
        width: 12px;
        border-radius: 50%;
    }
    & .carousel-indicators .active {
        background-color: #424242;
    }
`;

export default Slider;
