export interface TogglePostSheetModeAction {
    type: string;
    isEnabled: boolean;
}

export const TogglePostSheetMode = (isCurrentEnabled: boolean): TogglePostSheetModeAction => ({
    type: 'TOGGLE_POST_SHEET_MODE',
    isEnabled: !isCurrentEnabled
});
