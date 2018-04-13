import React, { Component } from 'react';
import { Text } from 'react-native';
import { TabBar } from 'antd-mobile';

export default class NavigatorBar extends Component {
	render() {
		return (
			<TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#000"
      >
      	<TabBar.Item
					title="发现"
          key="Life"
      	>
      		<Text>A</Text>
      	</TabBar.Item>
      	<TabBar.Item
					title="我的"
          key="Life"
      	>
      		<Text>B</Text>
      	</TabBar.Item>
      	<TabBar.Item
					title="账号"
          key="Life"
      	>
      		<Text>C</Text>
      	</TabBar.Item>
      </TabBar>
		);
	}
}
