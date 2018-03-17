import { TagData } from '../models/data';

export interface UpdateTagsAction {
    type: string;
    index: number;
    text: string;
}

export const AddTag = (tagData: TagData): UpdateTagsAction => ({
    type: 'ADD_TAG',
    index: -1,
    text: tagData.text
});

export const DeleteTag = (index: number): UpdateTagsAction => ({
    type: 'DELETE_TAG',
    index: index,
    text: ''
});