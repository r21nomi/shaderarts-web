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
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // var token = result.credential.accessToken;
            // var secret = result.credential.secret;
            var user = result.user;
            dispatch(loginSuccess(user));

            // firebase.auth().onAuthStateChanged in fetchUser.tsx will be fired.

            // var credential = firebase.auth.TwitterAuthProvider.credential(token, secret);
            // firebase.auth().signInWithCredential(credential)
            //     .catch(function(error) {
            //         var errorMessage = error.message;
            //         // // The email of the user's account used.
            //         // var email = error.email;
            //         // // The firebase.auth.AuthCredential type that was used.
            //         // var credential = error.credential;
            //         console.log(errorMessage);
            //     }).then(function(y) {
            //         console.log(y);
            //     });
          }).catch(function(error) {
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
            name: ''
        },
        errorMessage: errorMessage
    };
}