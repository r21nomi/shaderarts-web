import { ArtData, CodeData } from '../models/data';

export interface UpdateArtDataAction {
    type: UpdateArtDataActionType;
    artData: ArtData;
    codeData: CodeData[];
}

export enum UpdateArtDataActionType {
    UPDATE_ART_DATA = 'UPDATE_ART_DATA',
    UPDATE_ART_DATA_CODE = 'UPDATE_ART_DATA_CODE',
    RESET_ART_DATA = 'RESET_ART_DATA'
}