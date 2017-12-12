const initialState: ArtsState = {
    items: []
}

const arts = (state: ArtsState = initialState, action: any): ArtsState => {
    switch (action.type) {
        case 'REQUEST_ARTS':
            return Object.assign({}, state, {
                fragmentShader: action.code
            });

        case 'RECEIVE_ARTS':
            return Object.assign({}, state, {
                items: action.arts
            });

        default:
            return state;
    }
};

export interface ArtsState {
	items: any[]
}

export default arts;