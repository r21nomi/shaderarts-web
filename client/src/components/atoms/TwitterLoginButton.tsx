import * as React from 'react';
import '../../styles/twitter_login_button.css';

interface Props {
    onClick: () => void;
}

const TwitterLoginButton = ({ onClick }: Props) => (
    <button
        className="TwitterLoginButton"
        onClick={() => onClick()}
    >
    Sign in with Twitter
    </button>
);

export default TwitterLoginButton;