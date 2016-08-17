import * as React from 'react';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';
import { Popover } from 'antd-mobile';

const Item = Popover.Item;

export default class PopoverExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      // visible: false,
      selected: '',
    };
  }
  componentDidMount() {
    // setInterval(() => {
    //   this.refs.mc.refs.menuContext.toggleMenu('m');
    // }, 2000);
  }
  onSelect = (value) => {
    this.setState({
      // visible: false,
      selected: value,
    });
  }
  handleVisibleChange = (visible) => {
    // this.setState({
    //   visible,
    // });
  }
  render() {
    let overlay = [1, 2, 3].map((i, index) => (
      <Item key={index} value={`option ${i}`}><Text>option {i}</Text></Item>
    ));
    overlay = overlay.concat([
      <Item key="4" value="disabled" disabled><Text>disabled opt</Text></Item>,
      <Item key="6" value="button ct"><Text>关闭</Text></Item>,
    ]);
    return (<View>
      <View>
        <Text style={{ marginTop: 30, marginLeft: 100 }}>选择了：{this.state.selected}</Text>
      </View>
      <View style={styles.menuContainer}>
        <Popover ref="mc" name="m"
          overlay={overlay}
          contextStyle={styles.contextStyle}
          overlayStyle={styles.overlayStyle}
          triggerStyle={styles.triggerStyle}
          onSelect={this.onSelect}
        >
          <Text>菜单</Text>
        </Popover>
      </View>
    </View>);
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
});

export const title = 'Popover';
export const description = 'Popover example';
