import * as React from 'react';
import { View, Text } from 'react-native';
import { Popup, WhiteSpace, WingBlank, Button } from 'antd-mobile';

export default class PopupExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      sel0: '',
      sel1: '',
    };
  }

  getPopupContent = (num) => {
    return (
      <View style={{ flex: 1 }}>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onPress={this.onClose.bind(this, 'opt 1', num) }>操作一</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="ghost" onPress={this.onClose.bind(this, 'opt 2', num) }>操作二</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button onPress={this.onClose.bind(this, 'cancel', num) }>取消</Button>
        </WingBlank>
        <WhiteSpace />
      </View>
    );
  }

  onClose(sel, num) {
    this.setState({ [`sel${num}`]: sel });
    Popup.hide();
  }

  onClick = () => {
    Popup.show(this.getPopupContent(0), { maskClosable: true });
  }

  onClick1 = () => {
    Popup.show(this.getPopupContent(1), { maskClosable: true, animationType: 'slide-up' });
  }

  render() {
    return (
      <View style={{ margin: 20 }}>
        <WhiteSpace />
        <WingBlank>
          <Button type="ghost" onPress={this.onClick}>Dropdown 效果</Button>
          <Text>已选项目：{this.state.sel0}</Text>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="ghost" onPress={this.onClick1}>ActionSheet 效果</Button>
          <Text>已选项目：{this.state.sel1}</Text>
        </WingBlank>
      </View>
    );
  }
}
