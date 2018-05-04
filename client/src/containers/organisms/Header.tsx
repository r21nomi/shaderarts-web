import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink} from 'react-router-dom';
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
                <NavLink className="Header-logo" to="/"><img src="/img/logo.png" alt="Arto"/></NavLink>
                <ul className="Header-menu">
                    <li className="Header-menuItem"><NavLink to="/explore" activeClassName="active">Explore</NavLink></li>
                    <li className="Header-menuItem"><NavLink to="/create" activeClassName="active">Create</NavLink></li>
                </ul>
                {(() => {
                    if (!isAuthorized) {
                        return <button><NavLink to="/login">Login</NavLink></button>;
                    } else {
                        return <div className="Header-logoutSection">
                                    <NavLink className="Header-userInfo"
                                             to="/mypage"
                                             activeClassName="active">
                                        <img className="Header-thumb" src={myProfileState.user.thumb} alt={myProfileState.user.name}/>
                                        <p className="Header-userName">{myProfileState.user.name}</p>
                                    </NavLink>
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