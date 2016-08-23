import * as React from 'react';
import {
  View,
  Text,
  Modal,
  ActivityIndicator,
} from 'react-native';
import styles from './style';
import PropTypes from './ActivityIndicatorPropTypes';

export default class RNActivityIndicator extends React.Component<PropTypes, any> {
  static defaultProps = {
    animating: true,
    color: 'gray',
    size: 'small',
    panelColor: 'rgba(34,34,34,0.6)',
    toast: false,
  };

  _renderToast() {
    return (
      <View style={[styles.container]}>
        <Modal
          animationType="fade"
          transparent
          visible
        >
          <View style={[styles.innerContainer]}>
            <View style={[styles.wrapper]}>
             <ActivityIndicator color="white" size="large" />
             { this.props.text && (<Text style={[styles.toast]}>{this.props.text}</Text>) }
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  _renderSpinner() {
    return (
      <View
        style={[{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }]}
      >
        <ActivityIndicator
          color={this.props.color}
          size={this.props.size}
        />
        { this.props.text && (<Text style={[styles.tip]}>{this.props.text}</Text>) }
      </View>
    );
  }

  render() {
    if (this.props.animating) {
      return (
        <View>{ this.props.toast ? this._renderToast() : this._renderSpinner() }</View>
      );
    }
  }
}
