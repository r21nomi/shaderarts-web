import * as firebase from 'firebase';
import { LogoutAction } from '../logoutAction';

export function logout() {
    return (dispatch: any) => {
        firebase.auth().signOut().then(function() {
            // firebase.auth().onAuthStateChanged in fetchUser.tsx will be fired.
            dispatch(logoutSuccess());

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