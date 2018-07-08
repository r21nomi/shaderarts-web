export interface ToggleStarAction {
    type: ToggleStarActionType;
    artId: string;
}

export enum ToggleStarActionType {
    REQUEST_TOGGLE_STAR = 'REQUEST_TOGGLE_STAR',
    POST_STAR_SUCCESS = 'POST_STAR_SUCCESS',
    DELETE_STAR_SUCCESS = 'DELETE_STAR_SUCCESS',
    TOGGLE_STAR_FAILURE = 'TOGGLE_STAR_FAILURE'
}