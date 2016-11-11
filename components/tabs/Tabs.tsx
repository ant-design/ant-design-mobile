import React from 'react';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import styles from './style/';
import TabsProps from './PropsType';

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
    styles: styles,
  };

  static TabPane: any;
  activeIndex: number;

  constructor(props) {
    super(props);
    this.activeIndex = 0;
  }

  onTabClick = ({i}) => {
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
      tabBarPosition, underlineColor, activeUnderlineColor, textColor, activeTextColor, styles,
    } = this.props;
    const barStyle = tabBarPosition === 'top' ? styles.barTop : styles.barBottom;
    return (
      <DefaultTabBar
        activeTextColor={activeTextColor}
        inactiveTextColor={textColor}
        style={[barStyle, { borderColor: underlineColor } ]}
        textStyle={[styles.text]}
        tabStyle={[styles.tab]}
        underlineStyle={[styles.underline, {
          bottom: tabBarPosition === 'top' ? 0 : null,
          backgroundColor: activeUnderlineColor,
        }]}
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
        locked={swipeable}
        renderTabBar={this.renderTabBar}
        onChangeTab={this.onTabClick}
      >
        {this.getContents()}
      </ScrollableTabView>
    );
  }
}

export default Tabs;
