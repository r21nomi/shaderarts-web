import * as React from 'react';
import LoginButton from '../atoms/LoginButton';
import './styles/login_buttons.css';

interface Props {
    onTwitterLoginButtonClicked: () => void;
    onFacebookLoginButtonClicked:() => void;
    onGoogleLoginButtonClicked: () => void;
}

class LoginButtons extends React.Component<Props, object> {
    render() {
        const { onTwitterLoginButtonClicked, onFacebookLoginButtonClicked, onGoogleLoginButtonClicked } = this.props;

        return <ul className="LoginButtons">
                    <li className="LoginButtons-twitter">
                        <LoginButton label="Login with Twitter" onClick={onTwitterLoginButtonClicked} />
                    </li>
                    <li className="LoginButtons-facebook">
                        <LoginButton label="Login with Facebook" onClick={onFacebookLoginButtonClicked} />
                    </li>
                    <li className="LoginButtons-google">
                        <LoginButton label="Login with Google" onClick={onGoogleLoginButtonClicked}/>
                    </li>
                </ul>;
    }
}

export default LoginButtons;