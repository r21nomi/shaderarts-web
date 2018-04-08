import { FetchArtsAction, FetchArtsActionType } from '../actions/fetchArtsAction';
import { ToggleStarAction, ToggleStarActionType } from '../actions/toggleStarAction';
import { ArtEntity } from '../models/';

const initialState: ArtsState = {
    items: []
};

const arts = (state: ArtsState = initialState, action: FetchArtsAction | ToggleStarAction): ArtsState => {
    switch (action.type) {
        case FetchArtsActionType.REQUEST_ARTS:
            return state;

        case FetchArtsActionType.RECEIVE_ARTS:
            return Object.assign({}, state, {
                items: (action as FetchArtsAction).arts.map(artEntity => {
                    if (artEntity.isStarred === undefined) {
                        artEntity.isStarred = false;
                    }
                    return artEntity;
                })
            });

        case ToggleStarActionType.POST_STAR_SUCCESS: {
            let newState = Object.assign({}, state);
            newState.items.forEach(artEntity => {
                if (artEntity.id === (action as ToggleStarAction).artId) {
                    artEntity.isStarred = true;
                    artEntity.star++;
                }
            });
            return newState;
        }

        case ToggleStarActionType.DELETE_STAR_SUCCESS: {
            let newState = Object.assign({}, state);
            newState.items.forEach(artEntity => {
                if (artEntity.id === (action as ToggleStarAction).artId) {
                    artEntity.isStarred = false;
                    artEntity.star--;
                }
            });
            return newState;
        }

        default:
            return state;
    }
};

export interface ArtsState {
    items: ArtEntity[];
}

export default arts;