import { FetchArtDetailAction } from '../actions/fetchArtDetailAction';
import { ArtEntity, ArtType } from '../models/';
import { ToggleStarAction, ToggleStarActionType } from '../actions/toggleStarAction';

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

const artDetail = (state: ArtDetailState = initialState,
                   action: FetchArtDetailAction | ToggleStarAction): ArtDetailState => {
    switch (action.type) {
        case 'REQUEST_ART_DETAIL':
            return Object.assign({}, state, {
                isFetching: true
            });

        case 'RECEIVE_ART_DETAIL':
            return Object.assign({}, state, {
                isFetching: false,
                art: (action as FetchArtDetailAction).art
            });

        case ToggleStarActionType.POST_STAR_SUCCESS: {
            let artEntity = state.art;
            if (artEntity.id === (action as ToggleStarAction).artId) {
                let newArtEntity = Object.assign({}, artEntity, {
                    isStarred: true,
                    star: artEntity.star + 1
                });
                return Object.assign({}, state, {
                    art: newArtEntity
                });
            } else {
                return state;
            }
        }

        case ToggleStarActionType.DELETE_STAR_SUCCESS: {
            let artEntity = state.art;
            if (artEntity.id === (action as ToggleStarAction).artId) {
                let newArtEntity = Object.assign({}, artEntity, {
                    isStarred: true,
                    star: artEntity.star - 1
                });
                return Object.assign({}, state, {
                    art: newArtEntity
                });
            } else {
                return state;
            }
        }

        default:
            return state;
    }
};

export interface ArtDetailState {
    isFetching: boolean;
    art: ArtEntity;
}

export default artDetail;