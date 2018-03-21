import { UserEntity } from '../models/';

export interface LoginTwitterAction {
    type: string;
    user: UserEntity;
    errorMessage: string;
}