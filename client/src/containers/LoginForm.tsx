import { connect } from 'react-redux';
import LoginButtoms from '../components/molecules/LoginButtons';
import { RootState } from '../reducers/index';
import { loginTwitter } from '../actions/actionCreator/loginTwitter';
import { logInGoogle } from '../actions/actionCreator/logInGoogle';

const mapStateToProps = (state: RootState) => ({
    // no-op
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onTwitterLoginButtonClicked: () => {
        dispatch(loginTwitter());
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