import { FetchArtDetailAction } from "../actions/fetchArtDetail";
import { ArtEntity, ArtType } from '../models/';

const initialState: ArtDetailState = {
    isFetching: true,
    art: {
        id: '',
        title: '',
        type: ArtType.GLSL,
        thumb: '',
        description: '',
        star: 0,
        user: {
            id: '',
            name: '',
            thumb: ''
        },
        codes: []
    }
};

const artDetail = (state: ArtDetailState = initialState, action: FetchArtDetailAction): ArtDetailState => {
    switch (action.type) {
        case 'REQUEST_ART_DETAIL':
            return state;

        case 'RECEIVE_ART_DETAIL':
            return Object.assign({}, state, {
                isFetching: false,
                art: action.art
            });

        default:
            return state;
    }
};

export interface ArtDetailState {
    isFetching: boolean;
	art: ArtEntity;
}

export default artDetail;