export interface PostStarAction {
    type: PostStarActionType;
    artId: string;
}

export enum PostStarActionType {
    REQUEST_POST_STAR = 'REQUEST_POST_STAR',
    POST_STAR_SUCCESS = 'POST_STAR_SUCCESS',
    POST_STAR_FAILURE = 'POST_STAR_FAILURE'
}