import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ActionSheet } from 'antd-mobile';

const BUTTONS = [
  'Option 0',
  'Option 1',
  'Option 2',
  'Delete',
  'Cancel',
];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

export default React.createClass({
  getInitialState() {
    return {
      clicked: 'none',
    };
  },
  render() {
    return (
      <View>
        <Text onPress={this.showActionSheet} style={style.button}>
          Click to show the ActionSheet
        </Text>
        <Text>
          Clicked button: {this.state.clicked}
        </Text>
      </View>
    );
  },
  showActionSheet() {
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  },
});

const style = StyleSheet.create({
  button: {
    marginBottom: 10,
    fontWeight: '500',
  },
});

export const title = 'ActionSheet';
export const description = 'ActionSheet example';
