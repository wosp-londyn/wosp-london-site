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
    margin: 50px 0 0;

    & span {
        height: 30px;
        width: 30px;
    }

    & .carousel-indicators > li {
        height: 11px;
        width: 11px;
        margin: 0 7px;
        border-radius: 50%;
    }
`;

export default Slider;
