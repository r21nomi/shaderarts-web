import { UserEntity } from '../models/';

export interface LogInGoogleAction {
    type: LogInGoogleActionType;
    user: UserEntity;
    errorMessage: string;
}

export enum LogInGoogleActionType {
    GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS',
    GOOGLE_LOGIN_ERROR = 'GOOGLE_LOGIN_ERROR'
}