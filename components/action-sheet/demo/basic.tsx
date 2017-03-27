import React from 'react';
import { View, Text, Platform } from 'react-native';
import { ActionSheet, Button } from 'antd-mobile';

export default class Test extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      clicked: 'none',
      text: '',
    };
  }
  render() {
    return (
      <View style={{marginTop: 30}}>
        <View style={[{ padding: 8 }]}>
          <Button onClick={this.showActionSheet}>默认状态操作列表</Button>
        </View>
        <Text style={[{ padding: 8 }]}>
          点击过的按钮: {this.state.clicked}
        </Text>
        <View style={[{ padding: 8 }]}>
          <Button onClick={this.showShareActionSheet}>带分享功能的操作列表</Button>
        </View>
        <Text style={[{ padding: 8 }]}>
          {this.state.text}
        </Text>
      </View>
    );
  }
  showActionSheet = () => {
    const BUTTONS = ['操作一', '操作二', '操作三', '删除', '取消'];
    ActionSheet.showActionSheetWithOptions({
      title: '标题',
      message: '我是描述我是描述',
      options: BUTTONS,
      cancelButtonIndex: 4,
      destructiveButtonIndex: 3,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  }
  showShareActionSheet = () => {
    const opts = {
      url: 'https://www.alipay.com/',
      message: 'message to go with the shared url',
      excludedActivityTypes: [
        <Button onClick={() => ActionSheet.close()}>close ActionSheet</Button>,
      ] as any[],
      subject: (null as any),
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
        text = `通过 ${method} 分享`;
      } else {
        text = '您没有分享';
      }
      this.setState({text});
    });
  }
}

export const title = 'ActionSheet';
export const description = 'ActionSheet example';
