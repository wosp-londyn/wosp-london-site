import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import slajd1 from '../Assets/Images/slajd1.jpg';

// Slider is based on bootstrap-component: Carousel

const Slider = () => {
    return (
        <StyledCarousel>
            <Carousel.Item>
                <Img src={slajd1} alt="First slide" />
            </Carousel.Item>
        </StyledCarousel>
    );
};

const Img = styled.img`
    width: 100%;
`;

const StyledCarousel = styled(Carousel)`
    margin: 0;
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
