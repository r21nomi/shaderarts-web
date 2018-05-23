import * as firebase from 'firebase';
import { UserEntity } from '../../models/';
import { LogInGoogleAction, LogInGoogleActionType } from '../logInGoogleAction';

export function logInGoogle() {
    return (dispatch: any) => {
        let provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then(result => {
                let user = result.user;
                dispatch(loginSuccess(user));
            })
            .catch(error => {
                let errorMessage = error.message;
                dispatch(loginError(errorMessage));
            });
    };
}

function loginSuccess(user: UserEntity): LogInGoogleAction {
    return {
        type: LogInGoogleActionType.GOOGLE_LOGIN_SUCCESS,
        user: user,
        errorMessage: ''
    };
}

function loginError(errorMessage: string): LogInGoogleAction {
    return {
        type: LogInGoogleActionType.GOOGLE_LOGIN_ERROR,
        user: {
            id: '',
            name: '',
            thumb: ''
        },
        errorMessage: errorMessage
    };
}