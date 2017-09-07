import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles, { vars as variables, IActionSheetStyle } from './style/index.native';
import Modal from 'rmc-dialog/lib/Modal';

export interface IActionSheetNativeProps {
  onAnimationEnd?: (visible: boolean) => void;
  visible?: boolean;
  config?: any;
  callback?: (index: number) => void;
  styles?: IActionSheetStyle;
}

class ActionSheetAndroid extends React.Component<IActionSheetNativeProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible || false,
    };
  }

  confirm(index) {
    const { callback } = this.props;
    if (callback) {
      callback(index);
    }
    this.setState({
      visible: false,
    });
  }

  render() {
    const { config, onAnimationEnd } = this.props;
    const {
      title, message, options, destructiveButtonIndex, cancelButtonIndex,
    } = config;

    const titleMsg = !!title && (
      <View style={styles.title} key="0">
        <Text style={styles.titleText}>{title}</Text>
      </View>
    );

    const content = (
      options as Array<string>).map((item, index) => (
        <View key={index} style={[cancelButtonIndex === index ? styles.cancelBtn : undefined]}>
          <TouchableHighlight
            style={[ styles.btn ]}
            underlayColor={variables.fill_tap}
            onPress={() => this.confirm(index)}
          >
            <Text style={[ destructiveButtonIndex === index ? styles.destructiveBtn : undefined ]}>
              {item}
            </Text>
          </TouchableHighlight>
          {cancelButtonIndex === index ? <View style={styles.cancelBtnMask}/> : null}
        </View>
      ),
    );
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
            {!!message && <View style={styles.message} key="1"><Text>{message}</Text></View>}
            <View>{content}</View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default ActionSheetAndroid;
