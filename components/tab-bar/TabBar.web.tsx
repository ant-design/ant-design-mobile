import * as React from 'react';
import TabBarProps from './TabBarPropTypes';

class TabBar extends React.Component<TabBarProps, any> {
  static defaultProps = {
    prefixCls: 'am-tabbar',
    barTintColor: 'white',
    tintColor: '#108ee9',
    unselectedTintColor: '#888',
  };

  static Item: any;

  getPanes() {
    const { tintColor, unselectedTintColor, children, prefixCls} = this.props;
    const newChildren = [];
    React.Children.forEach(children, (child: any, idx) => {
      newChildren.push(React.cloneElement(child, {
        key: idx,
        tintColor,
        unselectedTintColor,
        rootPrefixCls: prefixCls,
      }));
    });

    return newChildren;
  }

  render() {
    const barTintColor = this.props;
    const panes = this.getPanes();
    return (
      <div className="am-tabbar">
        <div className="am-tabbar-content">

        </div>
        <div className="am-tabbar-tabs" style={{
          backgroundColor: barTintColor,
        }}>
          {panes}
        </div>
      </div>
    );
  }
}

export default TabBar;
