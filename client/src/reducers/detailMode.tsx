import { ToggleDetailModeAction } from '../actions/toggleDetailMode';

const initialState: DetailModeState = {
    isEnabled: false
};

const detailMode = (state: DetailModeState = initialState, action: ToggleDetailModeAction): DetailModeState => {
    switch (action.type) {
        case 'TOGGLE_DETAIL_MODE':
            return Object.assign({}, state, {
                isEnabled: action.isEnabled
            });

        default:
            return state;
    }
};

export interface DetailModeState {
    isEnabled: boolean;
}

export default detailMode;
