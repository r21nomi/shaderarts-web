import { ArtEntity, UserEntity } from '../models/';
import { urlProvider } from '../urlProvider';
import { handleErrors } from './handleErrors';

export interface FetchArtsAction {
    type: string;
    arts: ArtEntity[];
}

export function fetchArts(userEntity: UserEntity, offset: number) {
    let header = new Headers();
    header.set('X-Token', userEntity.token);

    var option = {
        method: 'GET',
        headers: header
    };
    var limit = 8;
    return (dispatch: any) => {
        dispatch(requestArts());
        return fetch(`${urlProvider.endpoint}/v1/art?limit=${limit}&offset=${offset}`, option)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => dispatch(receiveArts(json)))
            .catch(e => console.error(e));
    };
}

function requestArts(): FetchArtsAction {
    return {
        type: 'REQUEST_ARTS',
        arts: []
    };
}

function receiveArts(json: ArtEntity[]): FetchArtsAction {
    console.log(json);
    return {
        type: 'RECEIVE_ARTS',
        arts: json
    };
}