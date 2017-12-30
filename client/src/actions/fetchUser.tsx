import * as firebase from 'firebase';
import { UserEntity } from '../models/';

export interface FetchUserAction {
    type: string;
    user: UserEntity;
}

export function fetchUser() {
    return (dispatch: any) => {
        firebase.auth().onAuthStateChanged(function(user) {
            console.log("fetchUser success");
            
            if (user) {
                user.getToken(true).then(function(idToken) {
                    login(dispatch, idToken);
                }).catch(function(error) {
                    console.log(error);
                });
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
    fetch('http://ec2-52-199-201-116.ap-northeast-1.compute.amazonaws.com/v1/login', option)
    // fetch('http://localhost:9000/v1/login', option)
        .then(response => response.json())
        .then(json => dispatch(userAuthorized(json)));
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
            token: ''
        }
    }
}