import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown, WhiteSpace, WingBlank, Button } from 'antm';

export default class DropdownExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  render() {
    return (<View style={{ margin: 30 }}>
      <Button
        inline
        onPress={() => this.setState({ visible: true }) }
      >显示</Button>
      <Dropdown
        maskClosable={false}
        visible={this.state.visible}
        onShow={() => this.setState({ visible: true }) }
        onClose={() => this.setState({ visible: false }) }
      >
        <View style={styles.container}>
          <WingBlank>
            <Button type="primary">操作一</Button>
          </WingBlank>
          <WhiteSpace />
          <WingBlank>
            <Button type="primary" ghost>操作二</Button>
          </WingBlank>
          <WhiteSpace />
          <WingBlank>
            <Button onPress={() => this.setState({ visible: false }) }>取消</Button>
          </WingBlank>
        </View>
      </Dropdown>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export const title = 'Dropdown';
export const description = 'Dropdown example';
