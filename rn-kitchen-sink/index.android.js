import React from 'react';
import {
  AppRegistry,
  BackAndroid,
  Dimensions,
  DrawerLayoutAndroid,
  StyleSheet,
  ToolbarAndroid,
  View,
  StatusBar,
} from 'react-native';

import AntmRnList from './components/AntmRnList.android';

const DRAWER_WIDTH_LEFT = 56;

const AntmRnApp = React.createClass({
  getInitialState: function() {
    return {
      example: this._getUIExplorerHome(),
    };
  },

  _getUIExplorerHome: function() {
    return {
      title: 'Ant Mobile',
      component: this._renderHome(),
    };
  },

  componentWillMount: function() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackButtonPress);
  },

  render: function() {
    return (
      <DrawerLayoutAndroid
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        drawerWidth={Dimensions.get('window').width - DRAWER_WIDTH_LEFT}
        keyboardDismissMode="on-drag"
        ref={(drawer) => { this.drawer = drawer; }}
        renderNavigationView={this._renderNavigationView}>
        {this._renderNavigation()}
      </DrawerLayoutAndroid>
    );
  },

  _renderNavigationView: function() {
    return (
      <AntmRnList
        onSelectExample={this.onSelectExample}
        isInDrawer={true}
      />
    );
  },

  onSelectExample: function(example) {
    this.drawer.closeDrawer();
    if (example.title === this._getUIExplorerHome().title) {
      example = this._getUIExplorerHome();
    }
    this.setState({
      example: example,
    });
  },

  _renderHome: function() {
    var onSelectExample = this.onSelectExample;
    return React.createClass({
      render: function() {
        return (
          <AntmRnList
            onSelectExample={onSelectExample}
            isInDrawer={false}
          />
        );
      }
    });
  },

  _renderNavigation: function() {
    var Component = this.state.example.component;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#589c90"
        />
        <ToolbarAndroid
          onIconClicked={() => this.drawer.openDrawer()}
          style={styles.toolbar}
          title={this.state.example.title}
        />
        <Component
          ref={(example) => { this._exampleRef = example; }}
        />
      </View>
    );
  },

  _handleBackButtonPress: function() {
    if (
      this._exampleRef &&
      this._exampleRef.handleBackAction &&
      this._exampleRef.handleBackAction()
    ) {
      return true;
    }
    if (this.state.example.title !== this._getUIExplorerHome().title) {
      this.onSelectExample(this._getUIExplorerHome());
      return true;
    }
    return false;
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#E9EAED',
    height: 56,
  },
});

AppRegistry.registerComponent('rndemo', () => AntmRnApp);

module.exports = AntmRnApp;
