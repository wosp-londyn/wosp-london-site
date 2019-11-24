import styled from 'styled-components';
import wh from '../Assets/Images/wh.jpg';

const BackgroundHome = styled.div`
    position: absolute;
    background: url(${wh});
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-position: center center;
    background-size: cover;
    filter: grayscale(100%) opacity(45%);
`;

export default BackgroundHome;
