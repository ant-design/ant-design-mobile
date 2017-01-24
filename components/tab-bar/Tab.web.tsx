import React from 'react';
import Badge from '../badge/';

class Tab extends React.Component<any, any> {
  render() {
    const {
      title, icon, selectedIcon, prefixCls, badge, selected, unselectedTintColor, tintColor,
    } = this.props;

    const iconRes = selected ? selectedIcon : icon;
    const iconDom = React.isValidElement(iconRes) ? iconRes : (
      <img className={`${prefixCls}-image`} src={ iconRes.uri || iconRes } alt={title} />
    );
    const iconColor = selected ? tintColor : unselectedTintColor;
    return (
      <div {...this.props.dataAttrs}>
        <div className={`${prefixCls}-icon`} style={{ color: iconColor }}>
          { badge ? <Badge text={badge} className={`${prefixCls}-badge`}> {iconDom} </Badge> : iconDom }
        </div>
        <p className={`${prefixCls}-title`} style={{ color: selected ? tintColor : unselectedTintColor }}>
          {title}
        </p>
      </div>
    );
  }
}

export default Tab;
