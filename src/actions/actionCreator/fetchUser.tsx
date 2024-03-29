import * as firebase from 'firebase';
import { UserEntity } from '../../models/';
import { urlProvider } from '../../urlProvider';
import { handleErrors } from './handleErrors';
import { FetchUserAction } from '../fetchUserAction';

export function fetchUser() {
    return (dispatch: any) => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                user.getToken(true)
                    .then(idToken => login(dispatch, idToken))
                    .catch(error => console.error(error));
            } else {
                dispatch(userUnAuthorized());
            }
        });
    }
}

function login(dispatch: any, idToken: string) {
    let header = new Headers();
    header.set('X-Token', idToken);

    var option = {
        method: 'GET',
        headers: header
    };
    fetch(`${urlProvider.endpoint}/v1/login`, option)
        .then(handleErrors)
        .then(response => response.json())
        .then(json => dispatch(userAuthorized(json)))
        .catch(error => console.error(error));
}

function userAuthorized(user: UserEntity): FetchUserAction {
    console.log(user);
    return {
        type: 'USER_AUTHORIZED',
        user: user
    }
}

function userUnAuthorized(): FetchUserAction {
    return {
        type: 'USER_UNAUTHORIZED',
        user: {
            id: '',
            name: '',
            thumb: ''
        }
    }
}