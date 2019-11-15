import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button } from 'react-bootstrap';

const ButtonsToolbar = () => {
    return (
        <ButtonGroup>
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
        </ButtonGroup>
    );
};

export default ButtonsToolbar;
