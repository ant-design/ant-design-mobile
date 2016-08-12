import * as React from 'react';
import classNames from 'classnames';
import TabBarItemProps from './TabBarItemPropTypes';

class TabBarItem extends React.Component<TabBarItemProps, any> {
  static defaultProps = {
    onPress() {},
  };

  render() {
    const {
      title, selected, tintColor, unselectedTintColor, icon, selectedIcon, onPress,
      rootPrefixCls, className,
    } = this.props;

    const cls = classNames({
      [className]: !!className,
      [`${rootPrefixCls}-tabs-item-selected`]: selected,
      [`${rootPrefixCls}-tabs-item`]: true,
    });

    return (
      <div className={cls} onClick={onPress}>
        <img src={selected ? selectedIcon.uri : icon.uri} alt={title} />
        <p style={{ color: selected ? tintColor : unselectedTintColor }}>{title}</p>
      </div>
    );
  }
}

export default TabBarItem;
