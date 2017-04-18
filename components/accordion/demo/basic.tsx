/* tslint:disable:no-console */
import React from 'react';
import { View } from 'react-native';
import { Accordion, List } from 'antd-mobile';

export default class AccordionExmple extends React.Component<any, any> {
  onChange = (key) => {
    console.log(key);
  }
  render() {
    return (
      <View style={{ marginTop: 80, marginBottom: 10 }}>
        <Accordion onChange={this.onChange} defaultActiveKey="2">
          <Accordion.Panel header="Title 1">
            <List>
              <List.Item>Content 1</List.Item>
              <List.Item>Content 2</List.Item>
              <List.Item>Content 3</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Title 2">this is panel content2 or other</Accordion.Panel>
          <Accordion.Panel header="Title 3">
            Text text text text text text text text text text text text text text text
          </Accordion.Panel>
        </Accordion>
      </View>
    );
  }
}
