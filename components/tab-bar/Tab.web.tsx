import * as React from 'react';
import Badge from '../badge/';

class Tab extends React.Component<any, any> {
  render() {
    const {
      title, icon, selectedIcon,
      prefixCls, badge, selected,
    } = this.props;

    return (
      <div>
        <div className={`${prefixCls}-icon`}>
          { badge ? (
              <Badge text={badge} className={`${prefixCls}-badge`}>
                <img className={`${prefixCls}-image`}
                  src={selected ? selectedIcon.uri : icon.uri} alt={title} />
              </Badge>
            ) : (
              <img className={`${prefixCls}-image`}
                src={selected ? selectedIcon.uri : icon.uri} alt={title} />
            )
          }
        </div>
        <p className={`${prefixCls}-title`}>{title}</p>
        </div>
    );
  }
}

export default Tab;
