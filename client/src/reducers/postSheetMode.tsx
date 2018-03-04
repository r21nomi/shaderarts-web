import { TogglePostSheetModeAction } from '../actions/togglePostSheetMode';

const initialState: PostSheetModeState = {
    isEnabled: false
};

const postSheetMode = (state: PostSheetModeState = initialState, action: TogglePostSheetModeAction): PostSheetModeState => {
    switch (action.type) {
        case 'TOGGLE_POST_SHEET_MODE':
            return Object.assign({}, state, {
                isEnabled: action.isEnabled
            });

        default:
            return state;
    }
};

export interface PostSheetModeState {
    isEnabled: boolean;
}

export default postSheetMode;
