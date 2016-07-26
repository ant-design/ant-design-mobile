import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Platform,
} from 'react-native';
import codePush from 'react-native-code-push';
import { Scene, Router } from 'react-native-router-flux';

import Home from './components/Home';
import RnIndex from './components/RnIndex';
import WebIndex from './components/WebIndex';
import { APIS, COMPONENTS } from './demoList';

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
  }
});

class AntmRnApp extends React.Component {
  componentDidMount() {
    codePush.sync();
  }

  render() {
    const scenes = APIS.concat(COMPONENTS).map(component => {
      const Module = component.module.default;
      let Component = React.createClass({
        render() {
          return (
            <View style={styles.content}>
              <ScrollView
                style={styles.scrollView}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
              >
                <Module />
              </ScrollView>
            </View>
          );
        }
      });
      if (component.module.title === 'Drawer') {
        // drawer 不能放到 ScrollView 里
        Component = React.createClass({
          render() {
            return (
              <View style={styles.content}>
                <Module onNavigate={this.props.onNavigate} navigationState={this.props.navigationState} />
              </View>
            );
          }
        });
        const DrawerMainComponent = React.createClass({
          render() {
            return (
              <component.module.DrawerMain drawerComponent={Module} />
            );
          }
        });
        return (
          <Scene key={component.title} component={Component} title={component.title}>
            <Scene key="main" tabs>
              <Scene key={`${component.title}Sub`} hideNavBar component={DrawerMainComponent} />
            </Scene>
          </Scene>
        );
      }
      return <Scene key={component.title} component={Component} title={component.title} />;
    });

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Router>
          <Scene key="root" navigationBarStyle={{ backgroundColor: '#2e2e2e' }} titleStyle={{ color: 'white' }}>
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
