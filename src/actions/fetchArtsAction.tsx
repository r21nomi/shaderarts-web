import { ArtEntity } from '../models/';

export interface FetchArtsAction {
    type: FetchArtsActionType;
    arts: ArtEntity[];
}

export enum FetchArtsActionType {
    REQUEST_ARTS = 'REQUEST_ARTS',
    RECEIVE_ARTS = 'RECEIVE_ARTS'
}