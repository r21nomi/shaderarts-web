import { FetchArtsAction } from "../actions/index";
import { ArtEntity } from '../models/';

const initialState: ArtsState = {
    items: []
};

const arts = (state: ArtsState = initialState, action: FetchArtsAction): ArtsState => {
    switch (action.type) {
        case 'REQUEST_ARTS':
            return state;

        case 'RECEIVE_ARTS':
            return Object.assign({}, state, {
                items: action.arts
            });

        default:
            return state;
    }
};

export interface ArtsState {
	items: ArtEntity[];
}

export default arts;