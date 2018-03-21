import { urlProvider } from '../../urlProvider';
import { ArtData } from '../../models/data';
import { handleErrors } from './handleErrors';
import { getCurrentUserToken } from './getCurrentUserToken';
import { PostArtAction } from '../PostArtAction';
import { push, RouterAction } from 'react-router-redux';

export function postArt(artData: ArtData) {
    return (dispatch: any) => {
        dispatch(requestPostingArt());
        return getCurrentUserToken()
            .then(token => {
                let header = new Headers();
                header.set('X-Token', token);

                return {
                    method: 'POST',
                    headers: header,
                    body: JSON.stringify(artData)
                };
            })
            .then(option => fetch(`${urlProvider.endpoint}/v1/art`, option))
            .then(handleErrors)
            .then(response => dispatch(postingArtSuccess()))
            .then(response => dispatch(goToTopPage()))
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

function goToTopPage(): RouterAction {
    return push('/');
}