import { FetchUserAction } from "../actions/fetchUserAction";
import { UserEntity } from '../models/';

const initialState: MyProfileState = {
    isFetching: true,
    isAuthorized: false,
    user: {
        id: '',
        name: '',
        thumb: ''
    }
};

const myProfile = (state: MyProfileState = initialState, action: FetchUserAction): MyProfileState => {
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

export interface MyProfileState {
    isFetching: boolean;
    isAuthorized: boolean;
	user: UserEntity;
}

export default myProfile;