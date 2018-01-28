import { ArtEntity, UserEntity, ArtType } from '../models/';
import { urlProvider } from '../urlProvider';

export interface FetchArtDetailAction {
    type: string;
    art: ArtEntity;
}

export function fetchArtDetail(userEntity: UserEntity, artID: string) {
    let header = new Headers();
    header.set('X-Token', userEntity.token);

    var option = {
        method: 'GET',
        headers: header
    };
    return (dispatch: any) => {
        dispatch(requestArtDetail());
        return fetch(`${urlProvider.endpoint}/v1/art/${artID}`, option)
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
                token: '',
                thumb: ''
            },
            codes: []
        }
    };
}

function receiveArtDetail(json: ArtEntity): FetchArtDetailAction {
    return {
        type: 'RECEIVE_ART_DETAIL',
        art: json
    };
}