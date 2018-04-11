import React, { Component } from 'react';
import { Text } from 'react-native';
import { observer, inject } from 'mobx-react/native';
import ScrollableTabView, { ScrollableTabBar }  from 'react-native-scrollable-tab-view';

@inject('homeStore')
@observer
export default class TabBarCom extends Component {
  render() {
    return (
      <ScrollableTabView
        style={{marginTop: 20, }}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
      >
        <Text tabLabel="Tab #1">My</Text>
        <Text tabLabel="Tab #2 word word">favorite</Text>
      </ScrollableTabView>
    );
  }
}
