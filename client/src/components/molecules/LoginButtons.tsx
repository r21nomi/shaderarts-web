import * as React from 'react';
import TwitterLoginButton from '../atoms/TwitterLoginButton';
import GoogleLoginButton from '../atoms/GoogleLoginButton';
import FacebookLoginButton from '../atoms/FacebookLoginButton';

interface Props {
    onTwitterLoginButtonClicked: () => void;
    onFacebookLoginButtonClicked:() => void;
    onGoogleLoginButtonClicked: () => void;
}

class LoginButtons extends React.Component<Props, object> {
    render() {
        const { onTwitterLoginButtonClicked, onFacebookLoginButtonClicked, onGoogleLoginButtonClicked } = this.props;

        return <ul>
                    <li>
                        <TwitterLoginButton onClick={onTwitterLoginButtonClicked} />
                    </li>
                    <li>
                        <FacebookLoginButton onClick={onFacebookLoginButtonClicked} />
                    </li>
                    <li>
                        <GoogleLoginButton onClick={onGoogleLoginButtonClicked}/>
                    </li>
                </ul>;
    }
}

export default LoginButtons;