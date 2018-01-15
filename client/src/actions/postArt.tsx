import { UserEntity } from '../models/';
import { urlProvider } from '../urlProvider';
import { CodeState } from '../reducers/code';

export interface PostArtAction {
    type: string;
}

export function postArt(userEntity: UserEntity, codeState: CodeState) {
    let header = new Headers();
    header.set('X-Token', userEntity.token);

    let data = toArtData(codeState);
    let option = {
        method: 'POST',
        headers: header,
        body: JSON.stringify(data)
    };

    return (dispatch: any) => {
        dispatch(requestPostingArt());
        return fetch(`${urlProvider.endpoint}/v1/art`, option)
            .then(response => dispatch(postingArtSuccess()))
            .catch(e => {
                console.error(e);
                dispatch(postingArtError());
            });
    };
}

function toArtData(codeState: CodeState): object {
    return {
        title: 'art title',
        description: 'art description.',
        type: 1,
        codes: [
            {
                type: 1,
                text: codeState.vertexShader
            },
            {
                type: 2,
                text: codeState.fragmentShader
            }
        ]
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