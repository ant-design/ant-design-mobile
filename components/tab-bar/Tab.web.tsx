import React from 'react';
import Badge from '../badge/index.web';

class Tab extends React.Component<any, any> {
  renderIcon = () => {
    const { dot, badge, selected, selectedIcon, icon, title, prefixCls } = this.props;
    const iconRes = selected ? selectedIcon : icon;
    const iconDom = React.isValidElement(iconRes) ? iconRes : (
      <img className={`${prefixCls}-image`} src={ iconRes.uri || iconRes } alt={title} />
    );
    if (badge) {
      return (
        <Badge text={badge} className={`${prefixCls}-badge tab-badge`}> {iconDom} </Badge>
      );
    }
    if (dot) {
      return (
        <Badge dot className={`${prefixCls}-badge tab-dot`}>{iconDom}</Badge>
      );
    }
    return iconDom;
  }
  render() {
    const {
      title, prefixCls, selected, unselectedTintColor, tintColor,
    } = this.props;
    const iconColor = selected ? tintColor : unselectedTintColor;
    return (
      <div {...this.props.dataAttrs}>
        <div className={`${prefixCls}-icon`} style={{ color: iconColor }}>
          {this.renderIcon()}
        </div>
        <p className={`${prefixCls}-title`} style={{ color: selected ? tintColor : unselectedTintColor }}>
          {title}
        </p>
      </div>
    );
  }
}

export default Tab;
