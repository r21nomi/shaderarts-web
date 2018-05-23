import * as React from 'react';
import './styles/google_login_button.css';

interface Props {
    onClick: () => void;
}

const GoogleLoginButton = ({ onClick }: Props) => (
    <button
        className="GoogleLoginButton"
        onClick={() => onClick()}
    >
        Sign in with Google
    </button>
);

export default GoogleLoginButton;