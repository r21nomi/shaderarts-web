import { UpdateWindowSizeAction } from '../actions/updateWindowSizeAction';

const initialState: WindowSizeState = {
    width: window.innerWidth,
    height: window.innerHeight
};

const windowSize = (state: WindowSizeState = initialState, action: UpdateWindowSizeAction): WindowSizeState => {
    switch (action.type) {
        case 'UPDATE_WINDOW_SIZE':
            return Object.assign({}, state, {
                width: action.width,
                height: action.height
            });

        default:
            return state;
    }
};

export interface WindowSizeState {
	width: number;
    height: number;
}

export default windowSize;