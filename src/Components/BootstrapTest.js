import React from 'react';
import styled from 'styled-components';

import { Row, Col, Container } from 'react-bootstrap';

const BootstrapTest = () => {
    return (
        <>
            <StyledContainer>
                <SRow>
                    <SCol xs sm={4} lg={1} xl={1}>
                        11
                    </SCol>
                    <SCol xs sm={6} lg={10} xl={{ span: 2, offset: 4 }}>
                        12
                    </SCol>
                    <SCol xs sm={2} lg={1} xl={{ span: 1, offset: 3 }}>
                        13
                    </SCol>
                </SRow>
                <SRow>
                    <SCol>
                        <Content>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Saepe a explicabo repellat cumque
                            exercitationem! Consequuntur consequatur deserunt
                            quod quidem nisi expedita officia quisquam,
                            voluptatibus odio, enim magnam unde, et atque.
                        </Content>
                    </SCol>
                    <SCol sm={3}>22</SCol>
                </SRow>
            </StyledContainer>
        </>
    );
};

const Content = styled.article`
    width: 100%;
    padding: 10px 15px;
`;

// Bootstrap
const StyledContainer = styled(Container)`
    min-height: 40vmin;
`;

const SCol = styled(Col)`
    background: green;

    &:nth-child(2n) {
        background: darkgreen;
    }
`;

const SRow = styled(Row)`
    margin: 0 0 10px;
`;

export default BootstrapTest;
