import * as React from 'react';
import './styles/facebook_login_button.css';

interface Props {
    onClick: () => void;
}

const FacebookLoginButton = ({ onClick }: Props) => (
    <button
        className="FacebookLoginButton"
        onClick={() => onClick()}
    >
        Sign in with Facebook
    </button>
);

export default FacebookLoginButton;