import { UpdateTagsAction } from '../actions/updateTagsAction';
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
                        text: action.text
                    }
                ]
            });

        case 'DELETE_TAG':
            state.tags.splice(action.index, 1);  // remove item.
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