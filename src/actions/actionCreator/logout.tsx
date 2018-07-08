import * as firebase from 'firebase';
import { LogoutAction } from '../logoutAction';
import { push, RouterAction } from 'react-router-redux';

export function logout() {
    return (dispatch: any) => {
        firebase.auth().signOut().then(function() {
            // firebase.auth().onAuthStateChanged in fetchUser.tsx will be fired.
            dispatch(logoutSuccess());
            dispatch(goToTopPage());

        }).catch(error => dispatch(logoutError(error.message)));
    };
}

function logoutSuccess(): LogoutAction {
    return {
        type: 'LOGOUT_SUCCESS',
        errorMessage: ''
    };
}

function logoutError(errorMessage: string): LogoutAction {
    return {
        type: 'LOGOUT_ERROR',
        errorMessage: errorMessage
    };
}

function goToTopPage(): RouterAction {
    return push('/');
}