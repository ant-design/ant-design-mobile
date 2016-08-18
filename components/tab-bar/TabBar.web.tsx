import * as React from 'react';
import classNames from 'classnames';
import TabBarProps from './TabBarPropTypes';

class TabBar extends React.Component<TabBarProps, any> {
  static defaultProps = {
    prefixCls: 'am-tabbar',
    barTintColor: 'white',
    tintColor: '#108ee9',
    unselectedTintColor: '#888',
  };

  static Item: any;

  getPanes(content) {
    const { tintColor, unselectedTintColor, children, prefixCls } = this.props;
    // ios 规则： selected 为多个则只选中最后一个， selected 为 0 个则选中第一个;
    let selectedIndex = 0;
    children.forEach((child, idx) => {
      if (child.props.selected) {
        selectedIndex = idx;
      }
    });
    const newChildren = [];
    React.Children.forEach(children, (child: any, idx) => {
      if (content) {
        const cls = classNames({
          [`${prefixCls}-content-item`]: true,
          [`${prefixCls}-content-item-active`]: idx === selectedIndex,
        });
        newChildren.push(
          <div key={idx} className={cls}>
            {child.props.children}
          </div>
        );
      } else {
        newChildren.push(React.cloneElement(child, {
          key: idx,
          tintColor,
          unselectedTintColor,
          rootPrefixCls: prefixCls,
        }));
      }
    });

    return newChildren;
  }

  render() {
    const barTintColor = this.props.barTintColor;
    return (
      <div className="am-tabbar">
        <div className="am-tabbar-content">
          {this.getPanes(true)}
        </div>
        <div className="am-tabbar-tabs" style={{
          backgroundColor: barTintColor,
        }}>
          {this.getPanes(false)}
        </div>
      </div>
    );
  }
}

export default TabBar;
