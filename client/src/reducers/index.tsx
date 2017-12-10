import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import code, { CodeState } from './code';

export interface RootState {
    code: CodeState;
}

const todoApp = combineReducers<RootState>({
    todos,
    visibilityFilter,
    code
});

export default todoApp;