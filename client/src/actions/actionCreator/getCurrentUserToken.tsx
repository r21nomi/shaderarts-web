import * as firebase from 'firebase';

export function getCurrentUserToken(): Promise<string> {
    let user: firebase.User | null = firebase.auth().currentUser;

    if (!user) {
        return Promise.reject(new Error('Firebase user is not found.'));
    }

    return user!!.getIdToken(true).then(idToken => idToken);
}