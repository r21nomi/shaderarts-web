import { UpdateArtDataAction, UpdateArtDataActionType } from '../actions/updateArtDataAction';
import { getDefaultArtData } from '../models/artDataProvider';
import { ArtData } from '../models/data';

const initialState: ArtDataState = {
    data: getDefaultArtData()
};

const artData = (state: ArtDataState = initialState, action: UpdateArtDataAction): ArtDataState => {
    switch (action.type) {
        case UpdateArtDataActionType.UPDATE_ART_DATA:
            return Object.assign({}, state, {
                data: action.artData
            });

        case UpdateArtDataActionType.UPDATE_ART_DATA_CODE:
            state.data.codes = action.artData.codes;
            return Object.assign({}, state, {
                data: state.data
            });

        default:
            return state;
    }
};

export interface ArtDataState {
    data: ArtData;
}

export default artData;