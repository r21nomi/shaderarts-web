import { TagData } from '../../models/data';
import { UpdateTagsAction } from '../updateTagsAction';

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