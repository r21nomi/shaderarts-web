import { UserEntity } from '../models/';

export interface LogInFacebookAction {
    type: LogInFacebookActionType;
    user: UserEntity;
    errorMessage: string;
}

export enum LogInFacebookActionType {
    FACEBOOK_LOGIN_SUCCESS = 'FACEBOOK_LOGIN_SUCCESS',
    FACEBOOK_LOGIN_ERROR = 'FACEBOOK_LOGIN_ERROR'
}