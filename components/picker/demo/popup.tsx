import {ScrollView, TouchableHighlight, StyleSheet} from 'react-native';
import { Picker, List } from 'antm';
import * as React from 'react';

const data = [{
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
    children: [{
      value: 'xihu',
      label: '西湖',
    }],
  }],
}, {
  value: 'jiangsu',
  label: '江苏',
  disabled: true,
  children: [{
    value: 'nanjing',
    label: '南京',
    children: [{
      value: 'zhonghuamen',
      label: '中华门',
    }],
  }],
}];

export default class PopupExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  onClick = () => {
    console.log('start loading data');
    setTimeout(() => {
      this.setState({
        data,
      });
    }, 500);
  }
  render() {
    return (<ScrollView>
      <List>
        <List.Header>基本用法 Demo</List.Header>
          <List.Body>
            <Picker data={this.state.data} cols={2}>
              <List.Item arrow="horizontal" onClick={this.onClick}>省市选择(异步加载)</List.Item>
            </Picker>
          </List.Body>
        <List.Footer>列表尾部,List.Footer</List.Footer>
      </List>
    </ScrollView>);
  }
}

export const title = 'Picker';
export const description = 'picker example';
