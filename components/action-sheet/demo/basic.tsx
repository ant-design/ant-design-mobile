import * as React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { ActionSheet } from 'antd-mobile';

const BUTTONS = [
  '操作 0',
  '操作 1',
  '操作 2',
  '删除',
  '取消',
];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

export default React.createClass({
  getInitialState() {
    return {
      clicked: 'none',
      text: '',
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
        <Text onPress={this.showShareActionSheet} style={style.button}>
          Click to show the Share ActionSheet
        </Text>
        <Text>
          {this.state.text}
        </Text>
      </View>
    );
  },
  showActionSheet() {
    ActionSheet.showActionSheetWithOptions({
      title: '标题',
      message: '我是描述我是描述',
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  },
  showShareActionSheet() {
    const opts = {
      url: 'https://www.alipay.com/',
      message: 'message to go with the shared url',
      excludedActivityTypes: [
        <Text>excludedActivityTypes</Text>,
      ] as any[],
      subject: null as string,
    };
    if (Platform.OS === 'ios') {
      opts.subject = 'a subject to go in the email heading';
      opts.excludedActivityTypes = [
        'com.apple.UIKit.activity.PostToTwitter',
      ];
    }
    ActionSheet.showShareActionSheetWithOptions(opts,
    (error) => alert(error),
    (success, method) => {
      let text;
      if (success) {
        text = `Shared via ${method}`;
      } else {
        text = 'You didn\'t share';
      }
      this.setState({text});
    });
  },
});

const style = StyleSheet.create({
  button: {
    marginBottom: 10,
    fontWeight: '500' as any,
  },
});

export const title = 'ActionSheet';
export const description = 'ActionSheet example';
