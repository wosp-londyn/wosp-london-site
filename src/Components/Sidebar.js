import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
    return (
        <Wrapper>
            <div>TransferGO</div>
            <div>Zostań wolontariuszem</div>
            <div>
                <h3>Sponsorzy:</h3>
                <div>pierwszy</div>
                <div>drugi </div>
                <div>trzeci </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.aside`
    display: none;

    ${({ theme }) => theme.media.above.md} {
        display: flex;
        flex-direction: column;

        height: 1000px;
        outline: 1px black solid;
    }
`;

export default Sidebar;
