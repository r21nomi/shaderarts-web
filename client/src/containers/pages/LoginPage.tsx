import * as React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../LoginForm';
import { RootState } from '../../reducers/index';
import { MyProfileState } from '../../reducers/myProfile';
import './styles/page.css';
import './styles/top_page.css';

interface Props {
    myProfileState: MyProfileState;
}

const mapStateToProps = (state: RootState) => ({
    myProfileState: state.myProfile
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    // no-op
});

class LoginPage extends React.Component<Props, object> {
    render() {
        if (this.props.myProfileState.isAuthorized) {
            // Go back to previous page since already loged-in.
            // Usually this process is for the case after login.
            history.back();
        }
        return <div>
            <div className="Page-content LoginPage-content">Top Page</div>
            <LoginForm />
        </div>;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);