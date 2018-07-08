import * as firebase from 'firebase';

export function pushArt(artId: string) {
    return (dispatch: any) => {
        let user: firebase.User | null = firebase.auth().currentUser;

        if (user) {
            return firebase.database()
                .ref('users/' + user.uid)
                .set({
                    art: artId
                })
                .then(response => {
                    // TODO
                })
                .catch(e => {
                    console.error(e);
                });
        } else {
            return Promise.resolve('');
        }
    };
}
