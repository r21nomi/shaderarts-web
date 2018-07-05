import { ArtInfoData } from '../models/data';
import { SaveArtInfoDataAction, SaveArtInfoDataActionType } from '../actions/saveArtInfoDataAction';

const initialState: ArtInfoDataState = {
    data: {
        title: '',
        description: '',
        tags: []
    }
};

const artInfoData = (state: ArtInfoDataState = initialState,
                   action: SaveArtInfoDataAction): ArtInfoDataState => {
    switch (action.type) {
        case SaveArtInfoDataActionType.SAVE_ART_INFO_DATA:
            return Object.assign({}, state, {
                data: (action as SaveArtInfoDataAction).artInfoData
            });


        case SaveArtInfoDataActionType.CLEAR_ART_INFO_DATA:
            return Object.assign({}, state, initialState);

        default:
            return state;
    }
};

export interface ArtInfoDataState {
    data: ArtInfoData;
}

export default artInfoData;
