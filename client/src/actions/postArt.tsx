import { UserEntity } from '../models/';
import { urlProvider } from '../urlProvider';
import { ArtData } from '../models/data';
import { handleErrors } from './handleErrors';

export interface PostArtAction {
    type: string;
}

export function postArt(userEntity: UserEntity, artData: ArtData) {
    let header = new Headers();
    header.set('X-Token', userEntity.token);

    let option = {
        method: 'POST',
        headers: header,
        body: JSON.stringify(artData)
    };

    return (dispatch: any) => {
        dispatch(requestPostingArt());
        return fetch(`${urlProvider.endpoint}/v1/art`, option)
            .then(handleErrors)
            .then(response => dispatch(postingArtSuccess()))
            .catch(e => {
                console.error(e);
                dispatch(postingArtError());
            });
    };
}

function requestPostingArt(): PostArtAction {
    return {
        type: 'REQUEST_POSTING_ART'
    };
}

function postingArtSuccess(): PostArtAction {
    return {
        type: 'POSTING_ART_SUCCESS'
    };
}

function postingArtError(): PostArtAction {
    return {
        type: 'POSTING_ART_ERROR'
    };
}