import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <StyledCarousel>
            <Carousel.Item>
                <img
                    src="https://picsum.photos/seed/1/1000/400"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="https://picsum.photos/seed/2/1000/400"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="https://picsum.photos/seed/4/1000/400"
                    alt="First slide"
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
