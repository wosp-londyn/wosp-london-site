import styled from 'styled-components';

// Headers in HomePage sections - e.g. Facebook, Aktualności

const SectionHeader = styled.h2`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: calc(100% + 2px);
    margin-left: -1px;
    height: 100px;
    background: ${({ color }) => color};
    color: ${({ theme }) => theme.color.white};
`;

export default SectionHeader;
