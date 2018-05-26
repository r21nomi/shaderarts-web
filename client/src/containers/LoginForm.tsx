import { connect } from 'react-redux';
import LoginButtoms from '../components/molecules/LoginButtons';
import { RootState } from '../reducers/index';
import { loginTwitter } from '../actions/actionCreator/loginTwitter';
import { logInFacebook } from '../actions/actionCreator/logInFacebook';
import { logInGoogle } from '../actions/actionCreator/logInGoogle';

const mapStateToProps = (state: RootState) => ({
    // no-op
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onTwitterLoginButtonClicked: () => {
        dispatch(loginTwitter());
    },
    onFacebookLoginButtonClicked: () => {
        dispatch(logInFacebook());
    },
    onGoogleLoginButtonClicked: () => {
        dispatch(logInGoogle());
    }
});

const LoginForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginButtoms);

export default LoginForm;