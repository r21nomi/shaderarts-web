import * as React from 'react';
import Button from 'material-ui/Button';
import './styles/logout_button.css';

interface Props {
    onClick: () => void;
}

const LogoutButton = ({ onClick }: Props) => (
    <Button
        className="LogoutButton"
        onClick={() => onClick()}
    >
        Logout
    </Button>
);

export default LogoutButton;