import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import windowSize, { WindowSizeState } from './windowSize';
import user, { UserState } from './user';
import code, { CodeState } from './code';
import arts, { ArtsState } from './arts';
import artDetail, { ArtDetailState } from './artDetail';

export interface RootState {
    windowSize: WindowSizeState;
    user: UserState;
    arts: ArtsState;
    artDetail: ArtDetailState;
    code: CodeState;
}

const reducers = combineReducers<RootState>({
    router: routerReducer,
    windowSize,
    todos,
    visibilityFilter,
    user,
    arts,
    artDetail,
    code
});

export default reducers;