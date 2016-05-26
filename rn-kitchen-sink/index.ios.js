import React from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  Settings,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import AntmRnList from './components/AntmRnList.ios';

class AntmRnApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="default" />
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: 'Ant Mobile',
            component: AntmRnList
          }}
          itemWrapperStyle={styles.itemWrapper}
          tintColor="#008888"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemWrapper: {
    backgroundColor: '#eaeaea',
  },
  bigContainer: {
    flex: 1,
    height: 60,
    backgroundColor: 'gray',
  },
  smallContainer: {
    flex: 1,
    height: 40,
    backgroundColor: 'gray',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'white',
  }
});

AppRegistry.registerComponent('kitchen-sink', () => AntmRnApp);
