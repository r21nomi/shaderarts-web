import { ArtType } from '../../models';
import { ArtData, CodeData } from '../../models/data';
import { UpdateArtDataAction, UpdateArtDataActionType } from '../updateArtDataAction';

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