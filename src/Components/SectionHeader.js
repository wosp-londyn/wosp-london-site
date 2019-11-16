import styled from 'styled-components';

const SectionHeader = styled.h2`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    background: ${({ color }) => color};
`;

export default SectionHeader;
