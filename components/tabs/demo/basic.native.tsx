/* tslint:disable:no-console */
import { Tabs } from 'antd-mobile';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const renderContent = (tab: any, index: any) => {
  const style = {
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#ddd',
  } as any;
  const content = [1, 2, 3, 4, 5, 6, 7, 8].map(i => {
    return (
      <View key={`${index}_${i}`} style={style}>
        <Text>
          {tab.title} - {i}
        </Text>
      </View>
    );
  });
  return <ScrollView style={{ backgroundColor: '#fff' }}>{content}</ScrollView>;
};

export default class BasicTabsExample extends React.Component<any, any> {
  render() {
    const tabs = [
      { title: 'First Tab' },
      { title: 'Second Tab' },
      { title: 'Third Tab' },
    ];
    const tabs2 = [
      { title: '1st Tab' },
      { title: '2nd Tab' },
      { title: '3rd Tab' },
      { title: '4th Tab' },
      { title: '5th Tab' },
      { title: '6th Tab' },
      { title: '7th Tab' },
      { title: '8th Tab' },
      { title: '9th Tab' },
    ];
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
    } as any;
    return (
      <View style={{ flex: 1 }}>
        <Tabs tabs={tabs} initialPage={1}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
        <View style={{ flex: 2 }}>
          <Tabs tabs={tabs2} initialPage={1} tabBarPosition="top">
            {renderContent}
          </Tabs>
        </View>
      </View>
    );
  }
}

export const title = 'Tabs';
export const description = 'Tabs example';
