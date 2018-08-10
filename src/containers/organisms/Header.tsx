import * as React from 'react';
import { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { push } from 'react-router-redux';
import { LocationDescriptor } from 'history';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { RootState } from '../../reducers';
import { MyProfileState } from '../../reducers/myProfile';
import { logout } from '../../actions/actionCreator/logout';
import './styles/header.css';
import Button from '@material-ui/core/Button';

interface Props {
    myProfileState: MyProfileState;
    onLogoutButtonClick: () => void;
    onMenuItemClicked: (location: LocationDescriptor) => void;
}

const mapStateToProps = (state: RootState) => ({
    myProfileState: state.myProfile
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onLogoutButtonClick: () => {
        dispatch(logout());
    },
    onMenuItemClicked: (location: LocationDescriptor) => {
        dispatch(push(location));
    }
});

class Header extends React.Component<Props, object> {
    anchorEl: any = null;

    handleMenuButtonClick = (event: MouseEvent<HTMLAnchorElement>) => {
        this.anchorEl = event.currentTarget;
        this.forceUpdate();
    }

    handleMenuClose = () => {
        this.anchorEl = null;
        this.forceUpdate();
    }

    render() {
        const { myProfileState, onLogoutButtonClick, onMenuItemClicked } = this.props;
        let isAuthorized = myProfileState.isAuthorized;

        return <header className="Header">
            <div className="Header-content">
                <NavLink className="Header-logo" to="/"><img src="/img/logo.png" alt="ShaderArts"/></NavLink>
                <ul className="Header-menu">
                    <li className="Header-menuItem"><NavLink to="/explore" activeClassName="active">Explore</NavLink></li>
                    <li className="Header-menuItem"><NavLink to="/create" activeClassName="active">Create</NavLink></li>
                </ul>
                {(() => {
                    if (!isAuthorized) {
                        return <NavLink to="/login">
                            <Button className="Header-loginButton">Login</Button>
                        </NavLink>;
                    } else {
                        return <div className="Header-logoutSection">
                            <a className="Header-userInfo"
                               href="javascript:void(0)"
                               onClick={this.handleMenuButtonClick}>
                                <img className="Header-thumb"
                                     src={myProfileState.user.thumb}
                                     alt={myProfileState.user.name}/>
                            </a>
                            <Menu anchorEl={this.anchorEl}
                                  open={Boolean(this.anchorEl)}
                                  onClose={this.handleMenuClose}>
                                <MenuItem onClick={() => onMenuItemClicked('/mypage')}>My Page</MenuItem>
                                <MenuItem onClick={onLogoutButtonClick}>Logout</MenuItem>
                            </Menu>
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