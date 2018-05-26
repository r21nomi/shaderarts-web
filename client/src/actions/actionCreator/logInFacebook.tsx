import * as firebase from 'firebase';
import { UserEntity } from '../../models/';
import { LogInFacebookAction, LogInFacebookActionType } from '../logInFacebookAction';

export function logInFacebook() {
    return (dispatch: any) => {
        let provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then(result => {
                let user = result.user;
                dispatch(loginSuccess(user));
            })
            .catch(error => {
                let errorMessage = error.message;
                console.log(errorMessage);
                dispatch(loginError(errorMessage));
            });
    };
}

function loginSuccess(user: UserEntity): LogInFacebookAction {
    return {
        type: LogInFacebookActionType.FACEBOOK_LOGIN_SUCCESS,
        user: user,
        errorMessage: ''
    };
}

function loginError(errorMessage: string): LogInFacebookAction {
    return {
        type: LogInFacebookActionType.FACEBOOK_LOGIN_ERROR,
        user: {
            id: '',
            name: '',
            thumb: ''
        },
        errorMessage: errorMessage
    };
}