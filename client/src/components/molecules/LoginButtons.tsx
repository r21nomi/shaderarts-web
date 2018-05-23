import * as React from 'react';
import TwitterLoginButton from '../atoms/TwitterLoginButton';
import GoogleLoginButton from '../atoms/GoogleLoginButton';

interface Props {
    onTwitterLoginButtonClicked: () => void;
    onGoogleLoginButtonClicked: () => void;
}

class LoginButtons extends React.Component<Props, object> {
    render() {
        const { onTwitterLoginButtonClicked, onGoogleLoginButtonClicked } = this.props;

        return <ul>
                    <li>
                        <TwitterLoginButton onClick={onTwitterLoginButtonClicked} />
                    </li>
                    <li>
                        <GoogleLoginButton onClick={onGoogleLoginButtonClicked}/>
                    </li>
                </ul>;
    }
}

export default LoginButtons;