import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../reducers/index';
import { UserState } from '../../reducers/user';
import LogoutButton from '../../components/atoms/LogoutButton';
import { logout } from '../../actions/logout';
import '../../styles/header.css';

interface Props {
    userState: UserState;
    onLogoutButtonClick: () => void;
}

const mapStateToProps = (state: RootState) => ({
    userState: state.user
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onLogoutButtonClick: () => {
        dispatch(logout());
    }
});

class Header extends React.Component<Props, object> {
    render() {
        const { userState, onLogoutButtonClick } = this.props;
        let isAuthorized = userState.isAuthorized;

        return <header className="Header">
            <div className="Header-title"><Link to="/">Arto</Link></div>
            <ul>
                <li><Link to="/explore">Explore</Link></li>
                <li><Link to="/create">Create</Link></li>
            </ul>
            {(() => {
                if (!isAuthorized) {
                    return <button><Link to="/login">Login</Link></button>;
                } else {
                    return <LogoutButton onClick={onLogoutButtonClick} />;
                }
            })()}
        </header>;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);