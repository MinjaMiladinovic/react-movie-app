import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import SingleMovie from './components/Movies/SingleMovie';
import Movies from './components/Movies/Movies';
import TVShows from './components/TVShows/Shows';
import SingleTvShow from './components/TVShows/SingleShow';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/shows" exact={true} component={TVShows} />
        <Route path="/tvShowDetails/:id" exact={true} component={SingleTvShow} />
        <Route path="/movieDetails/:id" exact={true} component={SingleMovie} />
        <Route path="/movies" exact={true} component={Movies} />
        <Route path="/" exact={true} component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
    document.getElementById('root'));


serviceWorker.unregister();
