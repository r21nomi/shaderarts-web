import { urlProvider } from '../../urlProvider';
import { getCurrentUserToken } from './getCurrentUserToken';
import { handleErrors } from './handleErrors';
import { PostStarAction, PostStarActionType } from '../postStarAction';

export function postStar(artId: string) {
    return (dispatch: any) => {
        dispatch(requestPostStar(artId));
        return getCurrentUserToken()
            .then(token => {
                let header = new Headers();
                header.set('X-Token', token);

                return {
                    method: 'POST',
                    headers: header
                };
            })
            .then(option => fetch(`${urlProvider.endpoint}/v1/star/${artId}`, option))
            .then(handleErrors)
            .then(response => dispatch(postStarSuccess(artId)))
            .catch(e => {
                console.error(e);
                dispatch(postStarFilaure(artId));
            });
    };
}

function requestPostStar(artId: string): PostStarAction {
    return {
        type: PostStarActionType.REQUEST_POST_STAR,
        artId
    }
}

function postStarSuccess(artId: string): PostStarAction {
    return {
        type: PostStarActionType.POST_STAR_SUCCESS,
        artId
    }
}

function postStarFilaure(artId: string): PostStarAction {
    return {
        type: PostStarActionType.POST_STAR_FAILURE,
        artId
    }
}