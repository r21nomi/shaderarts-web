import { FetchArtDetailAction } from '../actions/fetchArtDetailAction';
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
        isStarred: false,
        user: {
            id: '',
            name: '',
            thumb: ''
        },
        codes: [],
        tags: []
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