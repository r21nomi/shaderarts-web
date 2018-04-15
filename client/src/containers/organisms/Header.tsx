import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../reducers/index';
import { MyProfileState } from '../../reducers/myProfile';
import LogoutButton from '../../components/atoms/LogoutButton';
import { logout } from '../../actions/actionCreator/logout';
import './styles/header.css';

interface Props {
    myProfileState: MyProfileState;
    onLogoutButtonClick: () => void;
}

const mapStateToProps = (state: RootState) => ({
    myProfileState: state.myProfile
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onLogoutButtonClick: () => {
        dispatch(logout());
    }
});

class Header extends React.Component<Props, object> {
    render() {
        const { myProfileState, onLogoutButtonClick } = this.props;
        let isAuthorized = myProfileState.isAuthorized;

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
                                            <img className="Header-thumb" src={myProfileState.user.thumb} alt={myProfileState.user.name}/>
                                            <p className="Header-userName">{myProfileState.user.name}</p>
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