import { UserEntity } from '../models/';

export interface FetchUserDetailAction {
    type: FetchUserDetailActionType;
    user: UserEntity;
}

export enum FetchUserDetailActionType {
    REQUEST_FETCH_USER_DETAIL = 'REQUEST_FETCH_USER_DETAIL',
    FETCH_USER_DETAIL_SUCCESS = 'FETCH_USER_DETAIL_SUCCESS',
    FETCH_USER_DETAIL_FAILURE = 'FETCH_USER_DETAIL_FAILURE'
}