import * as React from 'react';
import classNames from 'classnames';

export interface TabContentProps {

}

class TabContent extends React.Component<TabContentProps, any> {
  getContents() {
    const { contents, rootPrefixCls, activeKey, animation, itemWidth } = this.props;
    const newChildren = [];
    let currentIndex;
    React.Children.forEach(contents, (child: any, idx) => {
      if (child.key === activeKey) {
        currentIndex = idx;
        return true;
      }
    });
    React.Children.forEach(contents, (child: any, idx) => {
      const cls = classNames({
        [`${rootPrefixCls}-content-item`]: true,
        [`${rootPrefixCls}-content-item-active`]: child.key === activeKey,
      });
      newChildren.push(
        <div key={idx} className={cls} style={{
          left: (idx - currentIndex) * (itemWidth === 0 ? 9999 : itemWidth),
          transitionDuration: animation ? '0.3s' : '0',
          width: itemWidth,
        }}>
          {child.props.children}
        </div>
      );
    });
    return newChildren;
  }

  render() {
    const { rootPrefixCls } = this.props;
    return (
      <div className={`${rootPrefixCls}-content`}>
        {this.getContents()}
      </div>
    );
  }
}

export default TabContent;
