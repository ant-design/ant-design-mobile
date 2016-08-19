import * as React from 'react';
import classNames from 'classnames';
import TabContent from './TabContent.web';

export interface TabsProps {
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (key) => void;
  onTabClick?: (key) => void;
  animation?: boolean;
  tabPosition?: 'top' | 'bottom';
  className?: string;
  prefixCls?: string;
  underlineColor?: string;
  activeUnderlineColor?: string;
  textColor?: string;
  activeTextColor?: string;
}

function getDefaultActiveKey(props) {
  let activeKey;
  React.Children.forEach(props.children, (child: React.ReactElement<any>) => {
    if (!activeKey) {
      activeKey = child.key;
    }
  });
  return activeKey;
}

export default class Tabs extends React.Component<TabsProps, any> {
  static defaultProps = {
    prefixCls: 'am-tab',
    onChange(key) {},
    onTabClick(key) {},
    animation: true,
    underlineColor: '#ddd',
    activeUnderlineColor: '#108ee9',
    textColor: '#000',
    activeTextColor: '#108ee9',
    tabPosition: 'top',
  };

  static TabPane: any;

  constructor(props) {
    super(props);
    let activeKey;
    if ('activeKey' in props) {
      activeKey = props.activeKey;
    } else if ('defaultActiveKey' in props) {
      activeKey = props.defaultActiveKey;
    } else {
      activeKey = getDefaultActiveKey(props);
    }
    this.state = {
      activeKey,
      tabMovingDirection: 'forward',
    };
  }

  componentDidMount() {
    const activeKey = this.state.activeKey;
    let {
      nextIndex, paneLength,
    } = this.getIndexPair(this.props, activeKey, activeKey);
    this.setInkBarStyle(paneLength, nextIndex);
  }

  componentWillReceiveProps(nextProps) {
    let newActiveKey = this.state.activeKey;
    if ('activeKey' in nextProps) {
      newActiveKey = nextProps.activeKey;
      if (!newActiveKey) {
        this.setState({
          activeKey: newActiveKey,
        });
        return;
      }
    }
    let found;
    React.Children.forEach(nextProps.children, (child: React.ReactElement<any>) => {
      if (child.key === newActiveKey) {
        found = true;
      }
    });
    if (found) {
      this.setActiveKey(newActiveKey, nextProps);
    } else {
      this.setActiveKey(getDefaultActiveKey(nextProps), nextProps);
    }
  }

  onTabClick = (key) => {
    const { onTabClick, onChange } = this.props;
    this.setActiveKey(key);
    onTabClick(key);
    if (this.state.activeKey !== key) {
      onChange(key);
    }
  }

  getIndexPair(props, currentActiveKey, activeKey) {
    const keys = [];
    React.Children.forEach(props.children, (c: any) => {
      keys.push(c.key);
    });
    const currentIndex = keys.indexOf(currentActiveKey);
    const nextIndex = keys.indexOf(activeKey);
    return { currentIndex, nextIndex, paneLength: keys.length };
  }

  getPanes() {
    const {
      children, prefixCls, animation, underlineColor, activeUnderlineColor,
      textColor, activeTextColor,
    } = this.props;
    const newChildren = [];
    // TODO 解决 private props 问题
    React.Children.forEach(children, (child: any, idx) => {
      newChildren.push(React.cloneElement(child, {
        rootPrefixCls: prefixCls,
        activeKey: this.state.activeKey,
        onTabClick: this.onTabClick,
        itemKey: child.key,
        animation,
        key: child.key,
        underlineColor,
        activeUnderlineColor,
        textColor,
        activeTextColor,
      }));
    });
    // const activeKey = this.state.activeKey;
    // React.Children.forEach(children, (child: any, idx) => {
    //   const cls = classNames({
    //     [`${prefixCls}-tabpane-item-active`]: activeKey === child.key,
    //     [`${prefixCls}-tabpane-item`]: true,
    //   });
    //   newChildren.push(
    //     <div className={cls} onClick={() => this.onTabClick(child.key)} style={{
    //       color: activeKey === child.key ? activeTextColor : textColor,
    //       borderBottomColor: animation || activeKey !== child.key ? underlineColor : activeUnderlineColor,
    //     }}>
    //       {child.props.tab}
    //     </div>
    //   );
    // });
    return newChildren;
  }

  setActiveKey(activeKey, ps?: any) {
    const props = ps || this.props;
    const currentActiveKey = this.state.activeKey;
    if (currentActiveKey === activeKey || (('activeKey' in props) && (props === this.props))) {
      return;
    }
    if (!currentActiveKey) {
      this.setState({
        activeKey,
      });
    } else {
      let { currentIndex, nextIndex, paneLength } = this.getIndexPair(props, currentActiveKey, activeKey);
      const tabMovingDirection = currentIndex > nextIndex ? 'backward' : 'forward';
      this.setState({
        activeKey,
        tabMovingDirection,
      });
      this.setInkBarStyle(paneLength, nextIndex);
    }
  }

  setInkBarStyle(num, index) {
    const left = `${index * (100 / num)}%`;
    const right = `${(num - index - 1) * (100 / num)}%`;
    (this.refs as any).inkbar.style.left = left;
    (this.refs as any).inkbar.style.right = right;
  }

  render() {
    const {
      className, animation, children, prefixCls, tabPosition, activeUnderlineColor,
    } = this.props;
    const inkBarCls = classNames({
      [`${prefixCls}-ink-bar`]: true,
      [`${prefixCls}-ink-bar-transition-${this.state.tabMovingDirection}`]: animation,
    });
    const inkbar = (
      <div ref="inkbar" key="inkbar" className={inkBarCls} style={{
        backgroundColor: activeUnderlineColor,
      }} />
    );
    const panes = [
      this.getPanes(),
      inkbar,
    ];

    if (tabPosition === 'bottom') {
      panes.reverse();
    }

    const tabContent = [
      <div key="pane" className={`${prefixCls}-tabpane`}>
        {panes}
      </div>,
      <TabContent
        key="content"
        rootPrefixCls={prefixCls}
        activeKey={this.state.activeKey}
        contents={children}
        animation={animation}
        tabMovingDirection={this.state.tabMovingDirection}
      />,
    ];

    if (tabPosition === 'bottom') {
      tabContent.reverse();
    }

    const tabCls = classNames({
      [className]: !!className,
      [`${prefixCls}`]: true,
      [`${prefixCls}-bottom`]: tabPosition === 'bottom',
      [`${prefixCls}-no-animation`]: !animation,
    });

    return (
      <div className={tabCls}>
        {tabContent}
      </div>
    );
  }
}
