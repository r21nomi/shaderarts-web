import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import code from './code';

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    code
});

export default todoApp;