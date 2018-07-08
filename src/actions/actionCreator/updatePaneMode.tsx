import { PaneMode } from '../../models/index';
import { UpdatePaneModeAction } from '../updatePaneModeAction';

export const UpdatePaneMode = (mode: PaneMode): UpdatePaneModeAction => ({
    type: 'UPDATE_PANE_MODE',
    mode
});