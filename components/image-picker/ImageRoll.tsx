import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import varibles from '../style/themes/default';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { ImageRollProps } from './PropsType';

const styles = StyleSheet.create({
  statusBarBg: {
    height: 5 * 4,
  },
  naviBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    height: 11 * 4,
  },
  barTitle: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '500',
    marginLeft: 7 * 4,
    fontSize: 16,
  },
  rightBtn: {
    width: 14 * 4,
    color: varibles.brand_primary,
    fontSize: 16,
  },
});

export default class ImageRoll extends React.Component<ImageRollProps, any> {
  onSelected = (images) => {
    this.props.onSelected(images[0]);
    this.props.onCancel();
  }

  render() {
    return (
      <Modal animationType="slide" visible onRequestClose={() => {}} transparent={false}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
          <View style={styles.statusBarBg}/>
          <View style={[styles.naviBar]}>
            <Text style={[styles.barTitle]}>Photos</Text>
            <TouchableOpacity onPress={this.props.onCancel}>
              <Text style={styles.rightBtn}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <CameraRollPicker selected={[]} callback={this.onSelected} maximum={1} />
        </View>
      </Modal>
    );
  }
}
