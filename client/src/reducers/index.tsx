import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import user, { UserState } from './user';
import code, { CodeState } from './code';
import arts, { ArtsState } from './arts';

export interface RootState {
    user: UserState;
    arts: ArtsState;
    code: CodeState;
}

const reducers = combineReducers<RootState>({
    router: routerReducer,
    todos,
    visibilityFilter,
    user,
    arts,
    code
});

export default reducers;