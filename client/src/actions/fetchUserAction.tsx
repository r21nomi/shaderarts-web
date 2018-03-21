import { UserEntity } from '../models/';

export interface FetchUserAction {
    type: string;
    user: UserEntity;
}