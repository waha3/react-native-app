import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';

class SearchBarCom extends Component {
  render() {
    return (
      <SearchBar placeholder="Search" maxLength={8} />
    );
  }
}
