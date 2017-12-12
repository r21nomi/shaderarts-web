import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import code, { CodeState } from './code';
import arts, { ArtsState } from './arts';

export interface RootState {
    arts: ArtsState;
    code: CodeState;
}

const todoApp = combineReducers<RootState>({
    todos,
    visibilityFilter,
    arts,
    code
});

export default todoApp;