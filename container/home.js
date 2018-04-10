import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

class SearchBarCom extends Component {
  render() {
    return (
      <SearchBar placeholder="Search" maxLength={8} />
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