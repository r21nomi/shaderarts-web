import {SaveArtInfoDataAction, SaveArtInfoDataActionType} from "../saveArtInfoDataAction";

export const ClearArtInfoData = (): SaveArtInfoDataAction => ({
    type: SaveArtInfoDataActionType.CLEAR_ART_INFO_DATA,
    artInfoData: {
        title: '',
        description: '',
        tags: []
    }
});