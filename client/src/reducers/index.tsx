import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import windowSize, { WindowSizeState } from './windowSize';
import user, { UserState } from './user';
import arts, { ArtsState } from './arts';
import artDetail, { ArtDetailState } from './artDetail';
import paneMode, { PaneModeState } from './paneMode';
import postSheetMode, { PostSheetModeState } from './postSheetMode';
import tags, { TagsState } from './tags';
import artData, { ArtDataState } from './artData';

export interface RootState {
    windowSize: WindowSizeState;
    user: UserState;
    arts: ArtsState;
    artDetail: ArtDetailState;
    paneMode: PaneModeState;
    postSheetMode: PostSheetModeState;
    tags: TagsState;
    artData: ArtDataState;
}

const reducers = combineReducers<RootState>({
    router: routerReducer,
    windowSize,
    todos,
    visibilityFilter,
    user,
    arts,
    artDetail,
    paneMode,
    postSheetMode,
    tags,
    artData
});

export default reducers;