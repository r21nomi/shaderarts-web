import * as React from 'react';
import './styles/login_button.css';

interface Props {
    label: string;
    onClick: () => void;
}

const LoginButton = ({ onClick, label }: Props) => (
    <a className="LoginButton"
       href="javascript:void(0)"
       onClick={() => onClick()}
    >
        {label}
    </a>
);

export default LoginButton;