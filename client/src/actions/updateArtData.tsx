import { ArtType } from '../models';
import { ArtData, CodeData } from '../models/data';

export interface UpdateArtDataAction {
    type: UpdateArtDataActionType;
    artData: ArtData;
    codeData: CodeData[];
}

export enum UpdateArtDataActionType {
    UPDATE_ART_DATA = 'UPDATE_ART_DATA',
    UPDATE_ART_DATA_CODE = 'UPDATE_ART_DATA_CODE'
}

export const updateArtData = (artData: ArtData): UpdateArtDataAction => ({
    type: UpdateArtDataActionType.UPDATE_ART_DATA,
    artData,
    codeData: artData.codes
});

export const updateArtDataCode = (codeData: CodeData[]): UpdateArtDataAction => ({
    type: UpdateArtDataActionType.UPDATE_ART_DATA_CODE,
    artData: {
        title: '',
        description: '',
        type: ArtType.GLSL,
        thumb: '',
        codes: [],
        tags: []
    },
    codeData
});