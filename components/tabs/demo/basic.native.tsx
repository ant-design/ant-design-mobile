/* tslint:disable:no-console */
import React from 'react';
import { View, Text } from 'react-native';
import { Tabs } from 'antd-mobile';

const TabPane = Tabs.TabPane;

function onChange(key) {
  console.log('onChange', key);
}

function onTabClick(key) {
  console.log('onTabClick', key);
}

export default class BasicTabsExample extends React.Component <any, any> {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Tabs defaultActiveKey="1" onChange={onChange} onTabClick={onTabClick}>
          <TabPane tab="选项卡一" key="1">
            <View style={{ alignItems: 'center', justifyContent: 'center', height: 100 }}>
               <Text>选项卡一内容</Text>
            </View>
          </TabPane>
          <TabPane tab="选项卡二" key="2">
            <View style={{ alignItems: 'center', justifyContent: 'center', height: 100 }}>
               <Text>选项卡二内容</Text>
            </View>
          </TabPane>
          <TabPane tab="选项卡三" key="3">
            <View style={{ alignItems: 'center', justifyContent: 'center', height: 100 }}>
               <Text>选项卡三内容</Text>
            </View>
          </TabPane>
        </Tabs>
      </View>
    );
  }

}
