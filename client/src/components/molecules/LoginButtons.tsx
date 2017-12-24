import * as React from 'react';
import TwitterLoginButton from '../atoms/TwitterLoginButton';

interface Props {
    onTwitterButtonClick: () => void;
}

class LoginButtons extends React.Component<Props, object> {
    render() {
        const { onTwitterButtonClick } = this.props;
        return <div>
            <TwitterLoginButton onClick={onTwitterButtonClick} />
        </div>;
    }
}

export default LoginButtons;