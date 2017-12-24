import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import AppWithAuthorizationCheck from './containers/AppWithAuthorizationCheck';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

render(
    <Provider store={store}>
        <AppWithAuthorizationCheck />
    </Provider>,
    document.getElementById('root')
);
