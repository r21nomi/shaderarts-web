import * as React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../LoginForm';
import { RootState } from '../../reducers';
import { MyProfileState } from '../../reducers/myProfile';
import BackgroundArts from '../BackgroundArts';
import './styles/page.css';
import './styles/login_page.css';

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
        return <div className="LoginPage-content">
            <BackgroundArts/>
            <div className="LoginPage-contentWrapper">
                <h1 className="LoginPage-title">ShaderArts</h1>
                <p className="LoginPage-description">Welcome to the digital art world.</p>
                <LoginForm />
            </div>
        </div>;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);