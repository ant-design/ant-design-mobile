import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  BackAndroid,
  DeviceEventEmitter,
} from 'react-native';

import { Scene, Router, Reducer, Actions, ActionConst } from 'react-native-router-flux';

import Home from './components/Home';
import RnIndex from './components/RnIndex';
import WebIndex from './components/WebIndex';
import { UIVIEWS, UICONTROLS, OTHERS, UIBARS } from './demoList';

const styles = StyleSheet.create({
  content: {
    ...Platform.select({
      ios: {
        marginTop: 64,
      },
      android: {
        marginTop: 54,
      },
    }),
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
  navigationBarStyle: {
    backgroundColor: '#2e2e2e',
  },
  titleStyle: {
    color: 'white',
  },
});

let isMainScreen = false;
const reducerCreate = (params) => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    if (action.type === ActionConst.FOCUS && action.scene && action.scene.initial) {
      isMainScreen = true;
    } else {
      isMainScreen = false;
    }
    if (action.type === ActionConst.BACK_ACTION || action.type === ActionConst.BACK) {
      DeviceEventEmitter.emit('navigatorBack');
    }
    return defaultReducer(state, action);
  };
};

class AntmRnApp extends React.Component {
  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (!isMainScreen) {
        Actions.pop();
        return true;
      }
      return false;
    });
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress');
  }

  render() {
    const scenes = [...UIVIEWS, ...UICONTROLS, ...OTHERS, ...UIBARS].map((component) => {
      const Module = component.module.default;
      const Component = () => (
        <View style={styles.content}>
          <Module />
        </View>
      );

      if (component.title === 'Drawer') {
        const DrawerMainComponent = () => (
          <component.module.DrawerMain drawerComponent={Module} />
        );
        return (
          <Scene key="Drawer" component={Module} duration={200} direction="vertical">
            <Scene key="main" navigationBarStyle={styles.navigationBarStyle} titleStyle={styles.titleStyle}>
              <Scene key={`${component.title}Sub`} component={DrawerMainComponent} title={component.title} />
            </Scene>
          </Scene>
        );
      }
      return <Scene key={component.title} component={Component} title={component.title} />;
    });

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Router createReducer={reducerCreate}>
          <Scene key="root" navigationBarStyle={styles.navigationBarStyle} titleStyle={styles.titleStyle}>
            <Scene key="home" component={Home} title="Ant Design Mobile" initial />
            <Scene key="web" component={WebIndex} title="Antm Web Component" />
            <Scene key="native" component={RnIndex} title="Antm React Native" />
            {scenes}
          </Scene>
        </Router>
      </View>
    );
  }
}

AppRegistry.registerComponent('kitchen-sink', () => AntmRnApp);

export default AntmRnApp;
