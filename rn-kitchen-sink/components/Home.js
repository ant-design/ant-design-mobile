import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { List } from 'antd-mobile';
import codePush from 'react-native-code-push';
import AppInfo from './appInfo.js';

const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

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
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  version: {
    textAlign: 'center',
    color: '#888',
    fontSize: 12,
  },
  check: {
    color: '#108ee9',
    paddingVertical: 12,
    textAlign: 'center',
  },
});

class Home extends React.Component {
  onCheckUpdate = () => {
    const appVersion = AppInfo.getInfoShortVersion();
    fetch('https://raw.githubusercontent.com/ant-design/ant-design-mobile/master/rn-kitchen-sink/appInfo.json')
    .then(response => response.json())
    .then(responseJson => {
      const os = Platform.OS;
      if (responseJson[os]) {
        const newestVersion = responseJson[os].appversion;
        const appUrl = responseJson[os].appurl;
        if (appVersion.localeCompare(newestVersion) < 0) {
          Alert.alert(
            '',
            '检测到 APP 有新版本，是否前往下载',
            [
              { text: '取消', style: 'cancel' },
              { text: '下载', onPress: () => Linking.openURL(appUrl) },
            ]
          );
        } else {
          this.updateDemo();
        }
      } else {
        this.updateDemo();
      }
    });
  }

  updateDemo() {
    const onSyncStatusChange = function (syncStatus) {
      switch (syncStatus) {
        case 0: {
          Alert.alert(null, '最新版本');
        } break;
        case 3: {
          Alert.alert(null, '发生错误');
        } break;
        default: break;
      }
    };
    const onError = function (error) {
      Alert.alert(null, `发生错误: ${error}`);
    };
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
    }, onSyncStatusChange, null, onError);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://zos.alipayobjects.com/rmsportal/qyucQHYfzZlVaQo.png' }}
          style={styles.logo}
        />
        <Text style={styles.logoText}>Ant Design Mobile</Text>
        <Text style={styles.logoTextSub}>移动端UI组件库</Text>
        <List style={styles.list}>
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
        </List>
        <View style={styles.footer}>
          <Text style={styles.version}>App 版本: 0.8.0 / Demo 版本: 0.9.6</Text>
          <TouchableOpacity onPress={this.onCheckUpdate}>
            <Text style={styles.check}>检查更新</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default codePush(codePushOptions)(Home);
