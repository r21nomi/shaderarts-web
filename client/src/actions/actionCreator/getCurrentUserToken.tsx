import * as firebase from 'firebase';

export function getCurrentUserToken(): Promise<string> {
    let user: firebase.User | null = firebase.auth().currentUser;

    if (!user) {
        console.log('Firebase user is not found.');
        return Promise.resolve('');
    }

    return user!!.getIdToken(true).then(idToken => idToken);
}