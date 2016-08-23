import * as React from 'react';
import {
  View,
  Text,
  StatusBar,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import varibles from '../style/variables';
import CameraRollPicker from 'react-native-camera-roll-picker';

const styles = StyleSheet.create({
  statusBarBg: {
    height: 5 * varibles.grid,
  },
  naviBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: varibles.neutral_5,
    height: 11 * varibles.grid,
  },
  barTitle: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '500',
    marginLeft: 7 * varibles.grid,
    fontSize: varibles.font_size_5,
  },
  rightBtn: {
    width: 14 * varibles.grid,
    color: varibles.blue_6,
    fontSize: varibles.font_size_5,
  },
});

export interface ImageRollProps {
  onCancel: () => void;
  onSelected: (imgObj: {}) => void;
}

export default class ImageRoll extends React.Component<ImageRollProps, any> {
  onSelected = (images) => {
    this.props.onSelected(images[0]);
    this.props.onCancel();
  }

  render() {
    return (
      <Modal animationType="slide" visible onRequestClose={() => {}} transparent={false}>
        <View style={{flex: 1}}>
          <StatusBar barStyle="light-content" />
          <View style={styles.statusBarBg}></View>
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
