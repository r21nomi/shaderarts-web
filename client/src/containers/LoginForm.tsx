import { connect } from 'react-redux';
import LoginButtoms from '../components/molecules/LoginButtons';
import { RootState } from '../reducers/index';
import { loginTwitter } from '../actions/actionCreator/loginTwitter';

const mapStateToProps = (state: RootState) => ({
    // no-op
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onTwitterButtonClick: () => {
        dispatch(loginTwitter());
    }
});

const LoginForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginButtoms);

export default LoginForm;