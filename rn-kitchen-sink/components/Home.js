import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { List } from 'antd-mobile';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: 'https://zos.alipayobjects.com/rmsportal/qyucQHYfzZlVaQo.png' }}
          style={styles.logo} />
        <Text style={styles.logoText}>Ant Design Mobile</Text>
        <Text style={styles.logoTextSub}>移动端UI组件库</Text>
        <List style={styles.list}>
          <List.Body>
            <List.Item
              thumb="https://zos.alipayobjects.com/rmsportal/UIqwcqpVsIjvyYZ.png"
              arrow="horizontal"
              onClick={Actions.web}
            >H5 组件</List.Item>
            <List.Item
              thumb="https://zos.alipayobjects.com/rmsportal/lSsJiCJnOzSnBJG.png"
              onClick={Actions.native}
              arrow="horizontal"
            >React Native 组件</List.Item>
          </List.Body>
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: Platform.OS === 'ios' ? 64 : 44,
    flex: 1,
  },
  logo: {
    width: 108,
    height: 108,
    alignSelf: 'center',
    marginTop: 45,
  },
  logoText: {
    alignSelf: 'center',
    fontSize: 24,
    marginTop: 24,
    color: '#28B5F5',
  },
  logoTextSub: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 12,
    color: '#626262',
  },
  list: {
    marginTop: 32,
    marginBottom: 0,
  },
});
