import * as React from 'react';
import classNames from 'classnames';
import TabPaneProps from './TabPanePropTypes';

class TabPane extends React.Component<TabPaneProps, any> {
  render() {
    const { rootPrefixCls, itemKey, tab, activeKey, onTabClick } = this.props;
    const cls = classNames({
      [`${rootPrefixCls}-tabpane-item-active`]: activeKey === itemKey,
      [`${rootPrefixCls}-tabpane-item`]: true,
    });

    return (
      <div className={cls} onClick={() => onTabClick(itemKey)}>
        {tab}
      </div>
    );
  }
}

export default TabPane;
