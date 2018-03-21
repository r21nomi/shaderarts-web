import { UpdateWindowSizeAction } from '../updateWindowSizeAction';

export const updateWindowSize = (width: number, height: number): UpdateWindowSizeAction => ({
    type: 'UPDATE_WINDOW_SIZE',
    width,
    height
});