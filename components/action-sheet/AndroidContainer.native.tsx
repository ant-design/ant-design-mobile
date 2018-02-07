// tslint:disable:jsx-no-multiline-js
import React from 'react';
import {
  ActionSheetIOSOptions,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Modal from 'rmc-dialog/lib/Modal';
import styles, {
  ActionSheetStyle,
  vars as variables,
} from './style/index.native';

export interface ActionSheetNativeProps {
  onAnimationEnd?: (visible: boolean) => void;
  visible?: boolean;
  config: ActionSheetIOSOptions;
  callback?: (index: number) => void;
  styles?: ActionSheetStyle;
}

class ActionSheetAndroid extends React.Component<ActionSheetNativeProps, any> {
  constructor(props: ActionSheetNativeProps) {
    super(props);
    this.state = {
      visible: this.props.visible || false,
    };
  }

  confirm(index: number) {
    const { callback } = this.props;
    if (callback) {
      callback(index);
    }
    this.setState({
      visible: false,
    });
  }
  close = () => {
    this.setState({
      visible: false,
    });
  }
  render() {
    const { config, onAnimationEnd } = this.props;
    const {
      title,
      message,
      options,
      destructiveButtonIndex,
      cancelButtonIndex,
    } = config;

    const titleMsg = !!title && (
      <View style={styles.title} key="0">
        <Text style={styles.titleText}>{title}</Text>
      </View>
    );

    const content = (options as string[]).map((item, index) => (
      <View
        key={index}
        style={[cancelButtonIndex === index ? styles.cancelBtn : undefined]}
      >
        <TouchableHighlight
          style={[styles.btn]}
          underlayColor={variables.fill_tap}
          onPress={() => this.confirm(index)}
        >
          <Text
            style={[
              destructiveButtonIndex === index
                ? styles.destructiveBtn
                : undefined,
            ]}
          >
            {item}
          </Text>
        </TouchableHighlight>
        {cancelButtonIndex === index ? (
          <View style={styles.cancelBtnMask} />
        ) : null}
      </View>
    ));
    return (
      <View style={styles.container}>
        <Modal
          animationDuration={200}
          animateAppear
          visible={this.state.visible}
          onAnimationEnd={onAnimationEnd}
          style={styles.content}
          animationType="slide-up"
          maskClosable
          onClose={() => this.confirm(cancelButtonIndex || -1)}
        >
          <View>
            {titleMsg}
            {!!message && (
              <View style={styles.message} key="1">
                <Text>{message}</Text>
              </View>
            )}
            <View>{content}</View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default ActionSheetAndroid;
