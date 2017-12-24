import * as React from 'react';
import '../../styles/logout_button.css';

interface Props {
    onClick: () => void;
}

const LogoutButton = ({ onClick }: Props) => (
    <button
        className="LogoutButton"
        onClick={() => onClick()}
    >
    Logout
    </button>
);

export default LogoutButton;