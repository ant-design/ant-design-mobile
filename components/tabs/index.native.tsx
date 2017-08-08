import React, { PureComponent } from 'react';
import { StyleSheet, Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import tabsStyle from './style/index.native';
import TabsProps from './PropsType';

const tabsStyles = StyleSheet.create<any>(tabsStyle);

export interface TabPaneProps {
  key: string;
  tab: string;
}

export class TabPane extends React.Component<TabPaneProps, any> {
  render() {
    return null;
  }
}

class Tabs extends PureComponent<TabsProps, any> {
  static defaultProps = {
    tabBarPosition: 'top',
    animated: true,
    swipeable: true,
    onChange() {},
    onTabClick() {},
    underlineColor: '#ddd',
    activeUnderlineColor: '#108ee9',
    textColor: '#000',
    activeTextColor: '#108ee9',
    styles: tabsStyles,
    barStyle: null,
  };

  static TabPane = TabPane;

  constructor(props) {
    super(props);

    const routes = this.getRoutes(props);
    this.state = {
      index: this.getIndexFromKey(),
      routes,
    };
  }

  getRoutes(props) {
    return React.Children.map(props.children, (child: any, idx) => {
      return {
        key: child.key || `${idx}`,
        title: child.props.tab || `Option${idx}`,
        scene: () => child.props.children,
      };
    });
  }

  getIndexFromKey() {
    const { activeKey, defaultActiveKey } = this.props;
    const key = activeKey || defaultActiveKey;
    if (!key) {
      return 0;
    }
    const routes = this.getRoutes(this.props);
    return routes.findIndex(r => r.key === key);
  }

  getScenes() {
    const routes = this.getRoutes(this.props);
    const scenes = {};
    routes.forEach(route => {
      scenes[`${route.key}`] = route.scene;
    });
    return scenes;
  }

  handleIndexChange = index => {
    this.setState({ index });
    if (this.props.onChange) {
      const key = this.state.routes[index].key;
      this.props.onChange(key);
    }
  }

  onTabClick = (scene) => {
    if (this.props.onTabClick) {
      this.props.onTabClick(scene.route.key);
    }
  }

  renderLabel = (scene) => {
    const { styles, textColor, activeTextColor } = this.props;
    const tabStatusStyles = scene.focused ? [styles.activeTabText, {
      color: activeTextColor,
    }] : [styles.inactiveTabText, {
      color: textColor,
    }];
    const title = scene.route.title;
    return typeof title === 'string' ? (
      <Text style={[styles.tabText].concat(tabStatusStyles)}>{title}</Text>
    ) : title;
  }

  _renderBar = props => {
    const { barStyle, styles, tabBarPosition, activeUnderlineColor, underlineColor } = this.props;
    const barProps: any = {
      onTabPress: this.onTabClick,
      renderLabel: this.renderLabel,
      style: [styles.bar, styles[tabBarPosition === 'top' ? 'barTop' : 'barBottom'], {
        [tabBarPosition === 'top' ? 'borderBottomColor' : 'borderTopColor']: underlineColor,
      }, barStyle],
      tabStyle: styles.tab,
      indicatorStyle: [styles.underline, {
        [tabBarPosition === 'top' ? 'bottom' : 'top']: -1,
        backgroundColor: activeUnderlineColor,
      }],
    };

    return <TabBar {...props} {...barProps} />;
  }

  render() {
    const { animated, swipeable, tabBarPosition } = this.props;
    const postionRender: any = {
      [tabBarPosition === 'top' ? 'renderHeader' : 'renderFooter']: this._renderBar,
    };
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={SceneMap(this.getScenes())}
        onIndexChange={this.handleIndexChange}
        animationEnabled={animated}
        swipeEnabled={swipeable}
        {...postionRender}
      />
    );
  }
}

export default Tabs;
