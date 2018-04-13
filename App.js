import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import RootStack from './route.js';
import store from './mobx/store.js';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

