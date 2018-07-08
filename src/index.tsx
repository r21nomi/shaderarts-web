import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import history from './history';
import AppWithAuthorizationCheck from './containers/AppWithAuthorizationCheck';
import reducers from './reducers';

const middleware = applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history)
);

const store = createStore(
    reducers,
    middleware
)

render(
    <Provider store={store}>
        <AppWithAuthorizationCheck />
    </Provider>,
    document.getElementById('root')
);
