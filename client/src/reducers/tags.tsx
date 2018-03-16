import { UpdateTagsAction } from '../actions/updateTags';
import { TagData } from '../models/data';

const initialState: TagsState = {
    tags: []
};

const tags = (state: TagsState = initialState, action: UpdateTagsAction): TagsState => {
    switch (action.type) {
        case 'ADD_TAG':
            return Object.assign({}, state, {
                tags: [
                    ...state.tags,
                    {
                        id: action.id,
                        text: action.text
                    }
                ]
            });

        case 'DELETE_TAG':
            state.tags.splice(action.id, 1)  // remove item.
            return Object.assign({}, state, {
                tags: [
                    ...state.tags
                ]
            });

        default:
            return state;
    }
};

export interface TagsState {
	tags: TagData[];
}

export default tags;