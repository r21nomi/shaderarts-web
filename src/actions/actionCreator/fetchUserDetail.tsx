import { UserEntity } from '../../models/';
import { FetchUserDetailAction, FetchUserDetailActionType } from '../fetchUserDetailAction';
import { getCurrentUserToken } from './getCurrentUserToken';
import { urlProvider } from '../../urlProvider';
import { handleErrors } from './handleErrors';

export function fetchUserDetail(userID: string) {
    return (dispatch: any) => {
        dispatch(request());
        return getCurrentUserToken()
            .then(token => {
                let header = new Headers();
                header.set('X-Token', token);

                return {
                    method: 'GET',
                    headers: header
                };
            })
            .then(option => fetch(`${urlProvider.endpoint}/v1/user/${userID}`, option))
            .then(handleErrors)
            .then(response => response.json())
            .then(json => dispatch(success(json)))
            .catch(e => console.error(e));
    };
}

function request(): FetchUserDetailAction {
    return {
        type: FetchUserDetailActionType.REQUEST_FETCH_USER_DETAIL,
        user: {
            id: '',
            name: '',
            thumb: ''
        }
    };
}

function success(json: UserEntity): FetchUserDetailAction {
    return {
        type: FetchUserDetailActionType.FETCH_USER_DETAIL_SUCCESS,
        user: json
    };
}