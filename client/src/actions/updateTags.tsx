import { TagData } from '../models/data';

export interface UpdateTagsAction {
    type: string;
    id: number;
    text: string;
}

export const AddTag = (tagData: TagData): UpdateTagsAction => ({
    type: 'ADD_TAG',
    id: tagData.id,
    text: tagData.text
});

export const DeleteTag = (id: number): UpdateTagsAction => ({
    type: 'DELETE_TAG',
    id: id,
    text: ''
});