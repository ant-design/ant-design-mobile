import React from 'react';
import { StyleSheet } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import tabsStyle from './style';
import TabsProps from './PropsType';

const tabsStyles = StyleSheet.create<any>(tabsStyle);

class Tabs extends React.Component<TabsProps, any> {
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

  static TabPane: any;
  activeIndex: number;

  constructor(props) {
    super(props);
    this.activeIndex = 0;
  }

  onTabClick = ({ i }) => {
    const key = this.getKey(i);
    const { onTabClick, onChange } = this.props;
    if (onTabClick) {
      onTabClick(key);
    }
    if (this.activeIndex !== i) {
      if (onChange) {
        onChange(key);
      }
      this.activeIndex = i;
    }
  }

  getContents() {
    const { children } = this.props;
    const newChildren: any[] = [];
    React.Children.forEach(children as any, (child: any, idx) => {
      newChildren.push(React.cloneElement(child, {
        key: idx,
        tabLabel: child.props.tab,
        children: child.props.children,
      }));
    });

    return newChildren;
  }

  getKey(index) {
    const children = this.props.children;
    let key = '';
    React.Children.forEach(children as any, (child: any, idx) => {
      if (index === idx) {
        key = child.key;
      }
    });
    return key;
  }

  renderTabBar = () => {
    const {
      tabBarPosition, underlineColor, activeUnderlineColor, textColor, activeTextColor, styles, barStyle,
    } = this.props;
    const barBaseStyle = tabBarPosition === 'top' ? styles.barTop : styles.barBottom;
    const linePosition = tabBarPosition === 'top' ? {} : { top: -1 };
    const underlineStyle = [styles.underline, {
      bottom: tabBarPosition === 'top' ? -1 : null,
      backgroundColor: activeUnderlineColor,
    }, linePosition];
    return (
      <DefaultTabBar
        activeTextColor={activeTextColor}
        inactiveTextColor={textColor}
        style={[barBaseStyle, { borderColor: underlineColor }, barStyle ]}
        textStyle={[styles.text]}
        tabStyle={[styles.tab]}
        underlineStyle={underlineStyle}
      />
    );
  }

  render() {
    const {
      tabBarPosition, defaultActiveKey, activeKey, animated, children, swipeable,
    } = this.props;

    let defaultActiveIndex = 0;
    let activeIndex = 0;
    React.Children.forEach(children as any, (child: any, idx) => {
      if (defaultActiveKey === child.key) {
        defaultActiveIndex = idx;
      }
      if (activeKey === child.key) {
        activeIndex = idx;
      }
    });

    this.activeIndex = activeIndex;

    return (
      <ScrollableTabView
        tabBarPosition={tabBarPosition}
        scrollWithoutAnimation={!animated}
        initialPage={defaultActiveIndex}
        page={activeIndex}
        locked={!swipeable}
        renderTabBar={this.renderTabBar}
        onChangeTab={this.onTabClick}
      >
        {this.getContents()}
      </ScrollableTabView>
    );
  }
}

export default Tabs;
