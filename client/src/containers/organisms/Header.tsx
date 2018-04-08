import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../reducers/index';
import { UserState } from '../../reducers/user';
import LogoutButton from '../../components/atoms/LogoutButton';
import { logout } from '../../actions/actionCreator/logout';
import './styles/header.css';

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
            <div className="Header-content">
                <div className="Header-logo"><Link to="/">Arto</Link></div>
                <ul className="Header-menu">
                    <li className="Header-menuItem"><Link to="/explore">Explore</Link></li>
                    <li className="Header-menuItem"><Link to="/create">Create</Link></li>
                </ul>
                {(() => {
                    if (!isAuthorized) {
                        return <button><Link to="/login">Login</Link></button>;
                    } else {
                        return <div className="Header-logoutSection">
                                    <Link to="/mypage">
                                        <div className="Header-userInfo">
                                            <img className="Header-thumb" src={userState.user.thumb} alt={userState.user.name}/>
                                            <p className="Header-userName">{userState.user.name}</p>
                                        </div>
                                    </Link>
                                    <LogoutButton onClick={onLogoutButtonClick} />
                                </div>;
                    }
                })()}
            </div>
        </header>;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);