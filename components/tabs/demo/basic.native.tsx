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
          <TabPane tab="Tab1" key="1">
            <View style={{ alignItems: 'center', justifyContent: 'center', height: 100 }}>
               <Text>Content of Tab1</Text>
            </View>
          </TabPane>
          <TabPane tab="Tab2" key="2">
            <View style={{ alignItems: 'center', justifyContent: 'center', height: 100 }}>
               <Text>Content of Tab2</Text>
            </View>
          </TabPane>
          <TabPane tab="Tab3" key="3">
            <View style={{ alignItems: 'center', justifyContent: 'center', height: 100 }}>
               <Text>Content of Tab3</Text>
            </View>
          </TabPane>
        </Tabs>
      </View>
    );
  }

}
