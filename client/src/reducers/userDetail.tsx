import { FetchUserDetailAction, FetchUserDetailActionType } from '../actions/fetchUserDetailAction';
import { UserEntity } from '../models/';

const initialState: UserDetailState = {
    isFetching: true,
    user: {
        id: '',
        name: '',
        thumb: '',
    }
}

const userDetail = (state: UserDetailState = initialState, action: FetchUserDetailAction): UserDetailState => {
    switch (action.type) {
        case FetchUserDetailActionType.REQUEST_FETCH_USER_DETAIL:
            return state;

        case FetchUserDetailActionType.FETCH_USER_DETAIL_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                user: action.user
            });

        default:
            return state;
    }
};

export interface UserDetailState {
    isFetching: boolean;
	user: UserEntity;
}

export default userDetail;