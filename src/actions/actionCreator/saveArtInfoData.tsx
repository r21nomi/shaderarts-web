import {ArtInfoData} from "../../models/data";
import {SaveArtInfoDataAction, SaveArtInfoDataActionType} from "../saveArtInfoDataAction";

export const SaveArtInfoData = (artInfoData: ArtInfoData): SaveArtInfoDataAction => ({
    type: SaveArtInfoDataActionType.SAVE_ART_INFO_DATA,
    artInfoData
});