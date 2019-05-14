import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import SingleMovie from './components/Movies/SingleMovie'
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/singleMovie/:id" exact={true} component={SingleMovie} />
        <Route path="/" exact={true} component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
    document.getElementById('root'));


serviceWorker.unregister();
