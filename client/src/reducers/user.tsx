import { FetchUserAction } from "../actions/fetchUserAction";
import { UserEntity } from '../models/';

const initialState: UserState = {
    isFetching: true,
    isAuthorized: false,
    user: {
        id: '',
        name: '',
        thumb: ''
    }
};

const user = (state: UserState = initialState, action: FetchUserAction): UserState => {
    switch (action.type) {
        case 'USER_AUTHORIZED':
            console.log('USER_AUTHORIZED');
            console.log(action.user);
            return Object.assign({}, state, {
                isFetching: false,
                isAuthorized: true,
                user: action.user
            });

        case 'USER_UNAUTHORIZED':
            return Object.assign({}, state, {
                isFetching: false,
                isAuthorized: false
            });

        default:
            return state;
    }
};

export interface UserState {
    isFetching: boolean;
    isAuthorized: boolean;
	user: UserEntity;
}

export default user;