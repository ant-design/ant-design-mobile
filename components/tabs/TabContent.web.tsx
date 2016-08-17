import * as React from 'react';
import classNames from 'classnames';
import Animate from 'rc-animate';

export interface TabContentProps {
  rootPrefixCls: string;
  tabMovingDirection: string;
  contents: any;
  activeKey: string;
  animation: boolean;
}

export interface TabContentItemProps {
  active: boolean;
  rootPrefixCls: string;
}

class TabContentItem extends React.Component<TabContentItemProps, any> {
  render() {
    const { active, rootPrefixCls, children } = this.props;
    const cls = classNames({
      [`${rootPrefixCls}-content-item`]: true,
      [`${rootPrefixCls}-content-item-active`]: active,
    });
    return (
      <div className={cls}>
        {children}
      </div>
    );
  }
}

class TabContent extends React.Component<TabContentProps, any> {
  getContents() {
    const { contents, rootPrefixCls, activeKey } = this.props;
    return contents.map((child: any, idx) => {
      return (
        <TabContentItem key={idx}
          rootPrefixCls={rootPrefixCls}
          active={child.key === activeKey}
        >
          {child.props.children}
        </TabContentItem>
      );
    });
  }

  render() {
    const { rootPrefixCls, tabMovingDirection, animation } = this.props;
    const transitionName = animation ? (
      `${rootPrefixCls}-slide-horizontal-${tabMovingDirection || 'backward'}`
    ) : null;

    return (
      <div className={`${rootPrefixCls}-content`}>
        <Animate
          exclusive
          component="div"
          showProp="active"
          transitionName={transitionName}
        >
          {this.getContents()}
        </Animate>
      </div>
    );
  }
}

export default TabContent;
