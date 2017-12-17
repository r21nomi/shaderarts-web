import * as firebase from 'firebase';

export interface LogoutAction {
    type: string;
    errorMessage: string;
}

export function logout() {
    return (dispatch: any) => {
        firebase.auth().signOut().then(function() {
            // firebase.auth().onAuthStateChanged in fetchUser.tsx will be fired.
            dispatch(logoutSuccess());

        }).catch(function(error) {
            dispatch(logoutError(error.message));
        });
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