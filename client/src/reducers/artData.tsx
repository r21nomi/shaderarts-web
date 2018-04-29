import { UpdateArtDataAction, UpdateArtDataActionType } from '../actions/updateArtDataAction';
import { PostArtAction } from '../actions/postArtAction';
import { UpdateCodeErrorLineAction, UpdateCodeErrorLineActionType } from '../actions/updateCodeErrorLineAction';
import { getDefaultArtData } from '../models/artDataProvider';
import { ArtData } from '../models/data';

const initialState: ArtDataState = {
    data: getDefaultArtData()
};

const artData = (state: ArtDataState = initialState, action: UpdateArtDataAction | UpdateCodeErrorLineAction | PostArtAction): ArtDataState => {
    switch (action.type) {
        case UpdateArtDataActionType.UPDATE_ART_DATA:
            return Object.assign({}, state, {
                data: (action as UpdateArtDataAction).artData
            });

        case UpdateArtDataActionType.UPDATE_ART_DATA_CODE:
            state.data.codes = (action as UpdateArtDataAction).artData.codes;
            return Object.assign({}, state, {
                data: state.data
            });

        case UpdateCodeErrorLineActionType.UPDATE_CODE_ERROR_LINE:
            let codeType = (action as UpdateCodeErrorLineAction).codeType;
            let errorLine = (action as UpdateCodeErrorLineAction).errorLine;

            let newCodes = state.data.codes.map(currentCodeData => {
                return Object.assign({}, currentCodeData, {
                    errorLine: currentCodeData.type == codeType ? errorLine : currentCodeData.errorLine
                });
            });

            let newArtData = Object.assign({}, state.data, {
                codes: newCodes
            });

            return Object.assign({}, state, {
                data: newArtData
            });

        case 'POSTING_ART_SUCCESS':
            // Reset ArtData.
            return Object.assign({}, state, {
                data: getDefaultArtData()
            });

        default:
            return state;
    }
};

export interface ArtDataState {
    data: ArtData;
}

export default artData;