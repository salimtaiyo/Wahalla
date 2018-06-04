import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';


import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Nav from './components/Nav.jsx';
import Login from './components/Login';
import LoadingComponent from './components/LoadingComponent';
import AuthenticatedComponent from './components/AuthenticatedComponent';
import Update from './components/Update.jsx';

// redux store 
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <LoadingComponent>
                <div>
                    <Switch>
                        <Route path="/login" component={Login} exact={true} />
                        <Redirect from="/logout" to="/login" />
                        <AuthenticatedComponent>
                            <Nav />
                            <Route path="/:id/edit" component={Update} exact={true} />
                            <Route path="/" component={App} exact={true} />
                        </AuthenticatedComponent>
                    </Switch>
                </div>
            </LoadingComponent>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
