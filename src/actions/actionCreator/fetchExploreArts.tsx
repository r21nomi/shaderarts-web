import { ArtEntity } from '../../models/';
import { urlProvider } from '../../urlProvider';
import { handleErrors } from './handleErrors';
import { getCurrentUserToken } from './getCurrentUserToken';
import { FetchArtsAction, FetchArtsActionType } from '../fetchArtsAction';

export function fetchExploreArts(offset: number) {
    var limit = 16;
    return (dispatch: any) => {
        dispatch(requestArts());
        return getCurrentUserToken()
            .then(token => {
                let header = new Headers();
                header.set('X-Token', token);

                return {
                    method: 'GET',
                    headers: header
                };
            })
            .then(option => fetch(`${urlProvider.endpoint}/v1/explore?limit=${limit}&offset=${offset}`, option))
            .then(handleErrors)
            .then(response => response.json())
            .then(json => dispatch(receiveArts(json)))
            .catch(e => {
                console.error(e);
                // TODO: dispatch error action.
            });
    };
}

function requestArts(): FetchArtsAction {
    return {
        type: FetchArtsActionType.REQUEST_ARTS,
        arts: []
    };
}

function receiveArts(json: ArtEntity[]): FetchArtsAction {
    console.log(json);
    return {
        type: FetchArtsActionType.RECEIVE_ARTS,
        arts: json
    };
}