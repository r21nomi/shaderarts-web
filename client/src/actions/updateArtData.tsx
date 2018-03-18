import { ArtType } from '../models';
import { ArtData, CodeData } from '../models/data';

export interface UpdateArtDataAction {
    type: string;
    artData: ArtData;
    codeData: CodeData[];
}

export const updateArtData = (artData: ArtData): UpdateArtDataAction => ({
    type: 'UPDATE_ART_DATA',
    artData,
    codeData: artData.codes
});

export const updateArtDataCode = (codeData: CodeData[]): UpdateArtDataAction => ({
    type: 'UPDATE_ART_DATA_CODE',
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