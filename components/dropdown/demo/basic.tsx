import * as React from 'react';
import { View, Text } from 'react-native';
import { Dropdown, WhiteSpace, WingBlank, Button } from 'antm';

export default class DropdownExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      sel: '',
    };
  }

  onClose(sel) {
    this.setState({ sel });
    Dropdown.hide();
  }

  onClick = () => {
    Dropdown.show(<View style={{ flex: 1 }}>
      <WhiteSpace />
      <WingBlank>
        <Button type="primary" onPress={() => { this.onClose('opt 1'); }}>opt1</Button>
      </WingBlank>
      <WhiteSpace />
      <WingBlank>
        <Button type="primary" ghost onPress={() => { this.onClose('opt 2'); }}>opt 2</Button>
      </WingBlank>
      <WhiteSpace />
      <WingBlank>
        <Button onPress={() => { this.onClose('cancel'); }}>取消</Button>
      </WingBlank>
      <WhiteSpace />
    </View>, { maskClosable: true });
  }

  render() {
    return (
      <View style={{ margin: 20 }}>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onPress={this.onClick}>show Dropdown</Button>
          <Text>已选项目：{this.state.sel}</Text>
        </WingBlank>
        <WhiteSpace />
      </View>
    );
  }
}
