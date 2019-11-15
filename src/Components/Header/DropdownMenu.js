import styled from 'styled-components';

const DropdownMenu = styled.div`
    position: absolute;
    top: 60px;
    z-index: 999;

    width: 90px;
    background: #222;
    outline: black 1px;
    display: flex;
    flex-direction: column;
    text-align: center;
    /* text-transform: uppercase; */
`;

export default DropdownMenu;
