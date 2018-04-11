
import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import Home from './container/home.js';

const route = () => (
  <NativeRouter>
    <Route path="/" exact component={Home}/>
  </NativeRouter>
);

export default route;
