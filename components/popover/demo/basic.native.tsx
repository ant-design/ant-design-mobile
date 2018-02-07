import { Popover } from 'antd-mobile';
import React from 'react';
import { Platform, StyleSheet, Text, View, ViewStyle } from 'react-native';

const Item = Popover.Item;

export default class PopoverExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      // visible: false,
      selected: '',
    };
  }
  // componentDidMount() {
  //   setInterval(() => {
  //     this.refs.mc.refs.menuContext.toggleMenu('m');
  //   }, 2000);
  // }
  onSelect = (value: any) => {
    this.setState({
      // visible: false,
      selected: value,
    });
  }
  // handleVisibleChange = (_visible) => {
  //   this.setState({
  //     visible,
  //   });
  // }
  render() {
    let overlay = [1, 2, 3].map((i, index) => (
      <Item key={index} value={`option ${i}`}>
        <Text>option {i}</Text>
      </Item>
    ));
    overlay = overlay.concat([
      <Item key="4" value="disabled" disabled>
        <Text style={{ color: '#ddd' }}>disabled opt</Text>
      </Item>,
      <Item key="6" value="button ct" style={{ backgroundColor: '#efeff4' }}>
        <Text>关闭</Text>
      </Item>,
    ]);
    return (
      <View>
        <View>
          <Text style={{ marginTop: 30, marginLeft: 100 }}>
            选择了：{this.state.selected}
          </Text>
        </View>
        <View style={styles.menuContainer}>
          <Popover
            name="m"
            style={{ backgroundColor: '#eee' }}
            overlay={overlay}
            contextStyle={styles.contextStyle}
            // tslint:disable-next-line:jsx-no-multiline-js
            overlayStyle={[
              styles.overlayStyle,
              Platform.OS === 'android' && styles.androidOverlayStyle,
            ]}
            triggerStyle={styles.triggerStyle}
            onSelect={this.onSelect}
          >
            <Text>菜单</Text>
          </Popover>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contextStyle: {
    margin: 50,
    flex: 1,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 400,
    paddingHorizontal: 5,
    paddingVertical: 10,
  } as ViewStyle,
  triggerStyle: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  overlayStyle: {
    left: 90,
    marginTop: 20,
  },
  // 在 iOS 上弹出层有阴影，Android 上没有，
  // 详细：http://facebook.github.io/react-native/releases/0.39/docs/shadow-props.html#shadowcolor
  androidOverlayStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export const title = 'Popover';
export const description = 'Popover example';
