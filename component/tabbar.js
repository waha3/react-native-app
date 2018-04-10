import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TabBar } from 'antd-mobile';

export default class TabBarCom extends Component {
  state = {
    selectedTab: 'redTab',
    hidden: false,
    fullScreen: false,
  }

  render() {
    return (
      <View style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400, backgroundColor: 'red', width: 1000}}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="Life"
            key="Life"
            badge={1}
            data-seed="logId"
          >
            <Text>hello</Text>
          </TabBar.Item>
        </TabBar>
      </View>
    );
  }
}
