import { FetchArtsAction } from '../actions/fetchArtsAction';
import { PostStarAction, PostStarActionType } from '../actions/postStarAction';
import { ArtEntity } from '../models/';

const initialState: ArtsState = {
    items: []
};

const arts = (state: ArtsState = initialState, action: FetchArtsAction | PostStarAction): ArtsState => {
    switch (action.type) {
        case 'REQUEST_ARTS':
            return state;

        case 'RECEIVE_ARTS':
            return Object.assign({}, state, {
                items: (action as FetchArtsAction).arts.map(artEntity => {
                    if (artEntity.isStarred === undefined) {
                        artEntity.isStarred = false;
                    }
                    return artEntity;
                })
            });

        case PostStarActionType.POST_STAR_SUCCESS:
            let newState = Object.assign({}, state);
            newState.items.forEach(artEntity => {
                if (artEntity.id === (action as PostStarAction).artId) {
                    artEntity.isStarred = true;
                    artEntity.star++;
                }
            });
            return newState;

        default:
            return state;
    }
};

export interface ArtsState {
    items: ArtEntity[];
}

export default arts;