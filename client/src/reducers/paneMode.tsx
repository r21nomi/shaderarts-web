import { UpdatePaneModeAction } from '../actions/updatePaneMode';
import { PaneMode } from '../models/index';

const initialState: PaneModeState = {
    mode: PaneMode.OVERLAY
};

const paneMode = (state: PaneModeState = initialState, action: UpdatePaneModeAction): PaneModeState => {
    switch (action.type) {
        case 'UPDATE_PANE_MODE':
            return Object.assign({}, state, {
                mode: action.mode
            });

        default:
            return state;
    }
};

export interface PaneModeState {
	mode: PaneMode;
}

export default paneMode;