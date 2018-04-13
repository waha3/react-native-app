import React, { Component } from 'react';
import { View } from 'react-native';
import NavigatorBar from '../component/tabbar.js';
import { homeStyle } from '../layout/home.js';

export default class Home extends Component {
  render() {
    return (
      <View style={homeStyle.container}>
        <NavigatorBar style={homeStyle.navbar} />
      </View>
    );
  }
}
