import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button } from 'react-bootstrap';

const ButtonsToolbar = () => {
    return (
        <StyledButtonGroup>
            <Button as={Link} to="/live">
                Na żywo
            </Button>
            <Button as={Link} to="/zostan-wolontariuszem">
                Zostań wolontariuszem{' '}
            </Button>
            <Button as={Link} to="/aukcje">
                Aukcje{' '}
            </Button>
            <Button as={Link} to="/wplac-na-wosp">
                Wpłać na WOŚP{' '}
            </Button>
        </StyledButtonGroup>
    );
};

const StyledButtonGroup = styled(ButtonGroup)`
    width: 100%;
    height: 100px;

    a {
        background: #a50a00;
        border: 1px white solid;

        display: flex;
        flex-direction: column;
        justify-content: center;

        border-radius: 0;
    }
`;

export default ButtonsToolbar;
