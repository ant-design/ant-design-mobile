import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import codePush from "react-native-code-push";
import { Scene, Router } from 'react-native-router-flux';

import Home from './components/Home';
import RnIndex from './components/RnIndex';
import WebIndex from './components/WebIndex';
import { APIS, COMPONENTS } from './demoList';

// import Tag from '../components/tag/demo/basic';

class AntmRnApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    codePush.sync();
  }

  render() {
    const scenes = APIS.concat(COMPONENTS).map(component => {
      const Module = component.module.default;
      const Component = React.createClass({
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
      return <Scene key={component.title} component={Component} title={component.title} />;
    });

    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" />
        <Router>
          <Scene key="root" navigationBarStyle={{backgroundColor: '#2e2e2e'}} titleStyle={{color: 'white'}}>
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

const styles = StyleSheet.create({
  content: {
    marginTop: Platform.OS === 'ios' ? 64 : 54,
    flex: 1
  },
  scrollView: {
    height: Dimensions.get('window').height - 64,
    backgroundColor: 'white',
  }
});

AppRegistry.registerComponent('kitchen-sink', () => AntmRnApp);

export default AntmRnApp;
