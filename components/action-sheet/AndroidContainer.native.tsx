import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles, { vars as variables, IActionSheetStyle } from './style';
import Modal from 'rc-dialog/lib/Modal';

export interface IActionSheetNativeProps {
  onAnimationEnd?: (visible: boolean) => void;
  visible?: boolean;
  share?: boolean;
  config?: any;
  callback?: (index: number) => void;
  styles?: IActionSheetStyle;
}

class ActionSheetAndroid extends React.Component<IActionSheetNativeProps, any> {
  static defaultProps = {
    share: false,
  };
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
    const { config, share, onAnimationEnd } = this.props;
    const {
      title, message, url, options, destructiveButtonIndex, cancelButtonIndex, excludedActivityTypes,
    } = config;
    const titleMsg = share ? (
      url && <View style={styles.title} key="0"><Text>{url}</Text></View>
    ) : (
      title && <View style={styles.title} key="0"><Text style={styles.titleText}>{title}</Text></View>
    );
    const content = share ? (
      excludedActivityTypes.map((item, index) => <View key={index}>{item}</View>)
    ) : (
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
            {message && <View style={styles.message} key="1"><Text>{message}</Text></View>}
            <View>{content}</View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default ActionSheetAndroid;
