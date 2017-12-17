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
                dispatch(userAuthorized(user));
            } else {
                dispatch(userUnAuthorized());
            }
        });
    }
}

function userAuthorized(user: UserEntity): FetchUserAction {
    return {
        type: 'USER_AUTHORIZED',
        user: user
    }
}

function userUnAuthorized(): FetchUserAction {
    return {
        type: 'USER_UNAUTHORIZED',
        user: {}
    }
}