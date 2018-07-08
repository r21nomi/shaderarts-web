import { ArtInfoData } from '../models/data';

export interface SaveArtInfoDataAction {
    type: SaveArtInfoDataActionType;
    artInfoData: ArtInfoData;
}

export enum SaveArtInfoDataActionType {
    SAVE_ART_INFO_DATA = 'SAVE_ART_INFO_DATA',
    CLEAR_ART_INFO_DATA = 'CLEAR_ART_INFO_DATA'
}