import React from 'react';
import Badge from '../badge/';

class Tab extends React.Component<any, any> {
  render() {
    const {
      title, icon, selectedIcon, prefixCls, badge, selected, unselectedTintColor, tintColor,
    } = this.props;

    const iconRes = selected ? selectedIcon : icon;
    return (
      <div {...this.props.dataAttrs}>
        <div className={`${prefixCls}-icon`}>
          { badge ? (
              <Badge text={badge} className={`${prefixCls}-badge`}>
                <img className={`${prefixCls}-image`}
                  src={selected ? selectedIcon.uri : icon.uri} alt={title} />
              </Badge>
            ) : (
              <img className={`${prefixCls}-image`}
                src={ iconRes.uri || iconRes } alt={title} />
            )
          }
        </div>
        <p className={`${prefixCls}-title`} style={{
           color: selected ? tintColor : unselectedTintColor,
        }}>{title}</p>
      </div>
    );
  }
}

export default Tab;
