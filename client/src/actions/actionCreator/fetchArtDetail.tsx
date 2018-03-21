import { ArtEntity, ArtType } from '../../models/';
import { urlProvider } from '../../urlProvider';
import { handleErrors } from './handleErrors';
import { getCurrentUserToken } from './getCurrentUserToken';
import { FetchArtDetailAction } from '../fetchArtDetailAction';

export function fetchArtDetail(artID: string) {
    return (dispatch: any) => {
        dispatch(requestArtDetail());
        return getCurrentUserToken()
            .then(token => {
                let header = new Headers();
                header.set('X-Token', token);

                return {
                    method: 'GET',
                    headers: header
                };
            })
            .then(option => fetch(`${urlProvider.endpoint}/v1/art/${artID}`, option))
            .then(handleErrors)
            .then(response => response.json())
            .then(json => dispatch(receiveArtDetail(json)))
            .catch(e => console.error(e));
    };
}

function requestArtDetail(): FetchArtDetailAction {
    return {
        type: 'REQUEST_ART_DETAIL',
        art: {
            id: '',
            title: '',
            type: ArtType.GLSL,
            thumb: '',
            description: '',
            star: 0,
            user: {
                id: '',
                name: '',
                thumb: ''
            },
            codes: [],
            tags: []
        }
    };
}

function receiveArtDetail(json: ArtEntity): FetchArtDetailAction {
    return {
        type: 'RECEIVE_ART_DETAIL',
        art: json
    };
}