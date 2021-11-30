import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import { createStore } from 'redux'
import reducer from './redux/reducer'
import { Provider } from 'react-redux'
import './index.css';

const store = createStore(reducer)

const App =(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path = "/login" component = {Login}/>
          <Route exact path = "/signup" component = {Signup}/>
          <Route exact path = "/home/:name" component = {Home}/>
          <Redirect from="/" to="login" />
        </Switch>
      </BrowserRouter>
    </Provider>
)

ReactDOM.render(
    App,
  document.getElementById('root')
);