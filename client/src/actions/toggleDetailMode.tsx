export interface ToggleDetailModeAction {
    type: string;
    isEnabled: boolean;
}

export const ToggleDetailMode = (isCurrentEnabled: boolean): ToggleDetailModeAction => ({
    type: 'TOGGLE_DETAIL_MODE',
    isEnabled: !isCurrentEnabled
});
