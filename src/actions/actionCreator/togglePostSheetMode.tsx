import { TogglePostSheetModeAction } from '../togglePostSheetModeAction';

export const TogglePostSheetMode = (isCurrentEnabled: boolean): TogglePostSheetModeAction => ({
    type: 'TOGGLE_POST_SHEET_MODE',
    isEnabled: !isCurrentEnabled
});
