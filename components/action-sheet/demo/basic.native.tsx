import React from 'react';
import { View, Text, Platform } from 'react-native';
import { ActionSheet, Button } from 'antd-mobile';

export default class Test extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      clicked: 'none',
      text: '',
    };
  }
  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <View style={[{ padding: 8 }]}>
          <Button onClick={this.showActionSheet}>showActionSheet</Button>
        </View>
        <Text style={[{ padding: 8 }]}>
          clicked button: {this.state.clicked}
        </Text>
        <View style={[{ padding: 8 }]}>
          <Button onClick={this.showShareActionSheet}>
            showShareActionSheet
          </Button>
        </View>
        <Text style={[{ padding: 8 }]}>{this.state.text}</Text>
      </View>
    );
  }
  showActionSheet = () => {
    const BUTTONS = [
      'Operation1',
      'Operation2',
      'Operation3',
      'Delete',
      'Cancel',
    ];
    ActionSheet.showActionSheetWithOptions(
      {
        title: 'Title',
        message: 'Description',
        options: BUTTONS,
        cancelButtonIndex: 4,
        destructiveButtonIndex: 3,
      },
      (buttonIndex: any) => {
        this.setState({ clicked: BUTTONS[buttonIndex] });
      },
    );
  }
  showShareActionSheet = () => {
    const opts: any = {
      message: 'Message to go with the shared url',
      title: 'Share Actionsheet',
    };

    if (Platform.OS === 'ios') {
      opts.url = 'https://www.alipay.com/';
      opts.tintColor = '#ff0000';
      opts.excludedActivityTypes = ['com.apple.UIKit.activity.PostToTwitter'];
    }

    ActionSheet.showShareActionSheetWithOptions(
      opts,
      (error: any) => alert(error),
      (success: any, method: any) => {
        let text;
        if (success) {
          text = `Shared with ${method}`;
        } else {
          text = 'Did not share';
        }
        this.setState({ text });
      },
    );
  }
}

export const title = 'ActionSheet';
export const description = 'ActionSheet example';
