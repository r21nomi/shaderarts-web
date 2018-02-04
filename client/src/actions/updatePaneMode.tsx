import { PaneMode } from '../models/index';

export interface UpdatePaneModeAction {
    type: string;
    mode: PaneMode;
}

export const UpdatePaneMode = (mode: PaneMode): UpdatePaneModeAction => ({
    type: 'UPDATE_PANE_MODE',
    mode
});