import { urlProvider } from '../../urlProvider';
import { getCurrentUserToken } from './getCurrentUserToken';
import { handleErrors } from './handleErrors';
import { ToggleStarAction, ToggleStarActionType } from '../toggleStarAction';

export function toggleStar(artId: string, isStarCurrent: boolean) {
    return (dispatch: any) => {
        dispatch(requestToggleStar(artId));
        return getCurrentUserToken()
            .then(token => {
                let header = new Headers();
                header.set('X-Token', token);

                let method = isStarCurrent ? 'DELETE' : 'POST';
                return {
                    method: method,
                    headers: header
                };
            })
            .then(option => fetch(`${urlProvider.endpoint}/v1/star/${artId}`, option))
            .then(handleErrors)
            .then(response => dispatch(
                isStarCurrent ? deleteStarSuccess(artId) : postStarSuccess(artId)
            ))
            .catch(e => {
                console.error(e);
                dispatch(toggleStarFilaure(artId));
            });
    };
}

function requestToggleStar(artId: string): ToggleStarAction {
    return {
        type: ToggleStarActionType.REQUEST_TOGGLE_STAR,
        artId
    };
}

function postStarSuccess(artId: string): ToggleStarAction {
    return {
        type: ToggleStarActionType.POST_STAR_SUCCESS,
        artId
    };
}

function deleteStarSuccess(artId: string): ToggleStarAction {
    return {
        type: ToggleStarActionType.DELETE_STAR_SUCCESS,
        artId
    };
}

function toggleStarFilaure(artId: string): ToggleStarAction {
    return {
        type: ToggleStarActionType.TOGGLE_STAR_FAILURE,
        artId
    };
}