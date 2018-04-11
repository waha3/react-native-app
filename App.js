import React, { Component } from 'react';
import { Provider } from 'mobx-react/native';
import route from './route.js';
import store from './mobx/store.js';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <route />
      </Provider>
    );
  }
}

