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
          <Accordion.Panel key="1" header="标题一">
            <List>
              <List.Item>子内容一</List.Item>
              <List.Item>子内容二</List.Item>
              <List.Item>子内容三</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel key="2" header="标题二">this is panel content2 or other</Accordion.Panel>
          <Accordion.Panel key="3" header="标题三">
            文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本
          </Accordion.Panel>
        </Accordion>
      </View>
    );
  }
}
