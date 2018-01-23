import * as firebase from 'firebase';
import { UserEntity } from '../models/';

export interface LoginTwitterAction {
    type: string;
    user: UserEntity;
    errorMessage: string;
}

export function loginTwitter() {
    return (dispatch: any) => {
        var provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result => {
            var user = result.user;
            dispatch(loginSuccess(user));

        }).catch(error => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(errorCode);
            console.log(errorMessage);
            console.log(email);
            console.log(credential);

            dispatch(loginError(errorMessage));
        });
    };
}

function loginSuccess(user: UserEntity): LoginTwitterAction {
    return {
        type: 'TWITTER_LOGIN_SUCCESS',
        user: user,
        errorMessage: ''
    };
}

function loginError(errorMessage: string): LoginTwitterAction {
    return {
        type: 'TWITTER_LOGIN_ERROR',
        user: {
            id: '',
            name: '',
            token: '',
            thumb: ''
        },
        errorMessage: errorMessage
    };
}