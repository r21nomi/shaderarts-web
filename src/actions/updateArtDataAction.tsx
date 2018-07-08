import { ArtData } from '../models/data';

export interface UpdateArtDataAction {
    type: UpdateArtDataActionType;
    artData: ArtData;
}

export enum UpdateArtDataActionType {
    UPDATE_ART_DATA = 'UPDATE_ART_DATA',
    UPDATE_ART_DATA_CODE = 'UPDATE_ART_DATA_CODE'
}