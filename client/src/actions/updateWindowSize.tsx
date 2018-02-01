export interface UpdateWindowSizeAction {
    type: string;
    width: number;
    height: number;
}

export const updateWindowSize = (width: number, height: number): UpdateWindowSizeAction => ({
    type: 'UPDATE_WINDOW_SIZE',
    width,
    height
});