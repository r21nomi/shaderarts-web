import * as React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../LoginForm';
import { RootState } from '../../reducers/index';
import { UserState } from '../../reducers/user';
import '../../styles/top_page.css';

interface Props {
    userState: UserState;
}

const mapStateToProps = (state: RootState) => ({
    userState: state.user
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    // no-op
});

class LoginPage extends React.Component<Props, object> {
    render() {
        if (this.props.userState.isAuthorized) {
            // Go back to previous page since already loged-in.
            // Usually this process is for the case after login.
            history.back();
        }
        return <div>
            <div className="LoginPage-content">Top Page</div>
            <LoginForm />
        </div>;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);