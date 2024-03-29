import { FetchArtsAction, FetchArtsActionType } from '../actions/fetchArtsAction';
import { ToggleStarAction, ToggleStarActionType } from '../actions/toggleStarAction';
import { ArtEntity } from '../models/';

const initialState: ArtsState = {
    isLoading: false,
    items: []
};

const arts = (state: ArtsState = initialState, action: FetchArtsAction | ToggleStarAction): ArtsState => {
    switch (action.type) {
        case FetchArtsActionType.REQUEST_ARTS:
            return Object.assign({}, state, {
                isLoading: true
            });

        case FetchArtsActionType.RECEIVE_ARTS:
            return Object.assign({}, state, {
                isLoading: false,
                items: (action as FetchArtsAction).arts.map(artEntity => {
                    if (artEntity.isStarred === undefined) {
                        artEntity.isStarred = false;
                    }
                    return artEntity;
                })
            });

        case ToggleStarActionType.POST_STAR_SUCCESS: {
            let newArtEntities = state.items.map(artEntity => {
                if (artEntity.id === (action as ToggleStarAction).artId) {
                    return Object.assign({}, artEntity, {
                        isStarred: true,
                        star: artEntity.star + 1
                    });
                } else {
                    return artEntity;
                }
            });
            return Object.assign({}, state, {
                items: newArtEntities
            });
        }

        case ToggleStarActionType.DELETE_STAR_SUCCESS: {
            let newArtEntities = state.items.map(artEntity => {
                if (artEntity.id === (action as ToggleStarAction).artId) {
                    return Object.assign({}, artEntity, {
                        isStarred: false,
                        star: artEntity.star - 1
                    });
                } else {
                    return artEntity;
                }
            });
            return Object.assign({}, state, {
                items: newArtEntities
            });
        }

        default:
            return state;
    }
};

export interface ArtsState {
    isLoading: boolean;
    items: ArtEntity[];
}

export default arts;