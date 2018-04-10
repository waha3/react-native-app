import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

class SearchBarCom extends Component {
  render() {
    return (
      <View>
        <SearchBar placeholder="Search" maxLength={8} />
        <Text>hello world</Text>
      </View>
    );
  }
}

export default class Home extends Component {
  render() {
    return (
      <SearchBarCom />
    );
  }
}