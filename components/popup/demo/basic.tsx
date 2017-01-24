import React from 'react';
import { View, Text } from 'react-native';
import { Popup, WhiteSpace, Button, List } from 'antd-mobile';

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
      <View>
        <List renderHeader={() => '委托买入' }>
          <List.Item>股票名称</List.Item>
          <List.Item>股票代码</List.Item>
          <List.Item>买入价格</List.Item>
          <List.Item>买入数量</List.Item>
        </List>
        <View style={{ padding: 10 }}>
          <Text style={{ color: 'gray' }}>投资说明投资说明...</Text>
          <Text style={{ color: 'gray' }}>交易金额以实际成交为准</Text>
        </View>
        <View style={{ padding: 6 }}>
          <Button type="primary" onClick={() => this.onClose('cancel', num)}>买入</Button>
        </View>
      </View>
    );
  }

  onClose(sel, num) {
    this.setState({ [`sel${num}`]: sel });
    Popup.hide();
  }

  showPopup = () => {
    Popup.show(
      this.getPopupContent(1),
      {
        maskClosable: true,
        animationType: 'slide-up',
        onMaskClose: () => new Promise(resolve => { setTimeout(resolve, 1000); }),
      },
    );
  }

  render() {
    return (
      <View style={{ marginTop: 30, paddingHorizontal: 30 }}>
        <WhiteSpace />
        <Button onClick={() => Popup.show(this.getPopupContent(0))}>向下弹出效果</Button>
        <WhiteSpace />
        <Button onClick={this.showPopup}>向上弹出效果</Button>
      </View>
    );
  }
}
