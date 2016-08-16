import * as React from 'react';
import classNames from 'classnames';
import TabBarItemProps from './TabBarItemPropTypes';
import Badge from '../badge/';

class TabBarItem extends React.Component<TabBarItemProps, any> {
  static defaultProps = {
    onPress() {},
  };

  render() {
    const {
      title, selected, tintColor, unselectedTintColor, icon, selectedIcon, onPress,
      rootPrefixCls, className, badge,
    } = this.props;

    const cls = classNames({
      [className]: !!className,
      [`${rootPrefixCls}-tabs-item-selected`]: selected,
      [`${rootPrefixCls}-tabs-item`]: true,
    });

    return (
      <div className={cls} onClick={onPress}>
        { badge ? (
            <Badge text={badge} className={`${rootPrefixCls}-tabs-item-badge`}>
              <img className={`${rootPrefixCls}-tabs-item-icon`}
                src={selected ? selectedIcon.uri : icon.uri} alt={title} />
            </Badge>
          ) : (
            <img className={`${rootPrefixCls}-tabs-item-icon`}
              src={selected ? selectedIcon.uri : icon.uri} alt={title} />
          )
        }
        <p className={`${rootPrefixCls}-tabs-item-title`} style={{
          color: selected ? tintColor : unselectedTintColor,
        }}>{title}</p>
      </div>
    );
  }
}

export default TabBarItem;
