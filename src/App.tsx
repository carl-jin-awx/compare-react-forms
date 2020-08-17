import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';

import ReduxForm from './ReduxForm';
import ReactHookForm from './ReactHookForm';
import Formik from './Formik';

const store = createStore(combineReducers({ form: formReducer }), composeWithDevTools({})());



export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/redux-form" exact component={ReduxForm} />
          <Route path="/react-hook-form" exact component={ReactHookForm} />
          <Route path="/formik" exact component={Formik} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}