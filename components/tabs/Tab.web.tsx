import * as React from 'react';
import classNames from 'classnames';
import TabContent from './TabContent.web';

export interface TabsProps {
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (key) => void;
  onTabClick?: (key) => void;
  animation?: string | boolean;
  tabPosition?: 'top' | 'bottom';
  transitionName?: string;
  className?: string;
  prefixCls?: string;
}

function getDefaultActiveKey(props) {
  let activeKey;
  React.Children.forEach(props.children, (child: React.ReactElement<any>) => {
    if (!activeKey) {
      activeKey = child.key;
    }
  });
  return activeKey;
}

export default class Tabs extends React.Component<TabsProps, any> {
  static defaultProps = {
    prefixCls: 'am-tab',
    onChange(key) {},
    onTabClick(key) {},
    animation: true,
  };

  static TabPane: any;

  constructor(props) {
    super(props);
    let activeKey;
    if ('activeKey' in props) {
      activeKey = props.activeKey;
    } else if ('defaultActiveKey' in props) {
      activeKey = props.defaultActiveKey;
    } else {
      activeKey = getDefaultActiveKey(props);
    }
    this.state = {
      activeKey,
      tabMovingDirection: 'forward',
      itemWidth: 0,
    };
  }

  componentDidMount() {
    const activeKey = this.state.activeKey;
    let {
      currentIndex, nextIndex, paneLength,
    } = this.getIndexPair(this.props, activeKey, activeKey);
    this.setInkBarStyle(paneLength, nextIndex);
    const itemWidth = (this.refs as any).tabpane.offsetWidth;
    this.setState({
      itemWidth,
    });
  }

  componentWillReceiveProps(nextProps) {
    let newActiveKey = this.state.activeKey;
    if ('activeKey' in nextProps) {
      newActiveKey = nextProps.activeKey;
      if (!newActiveKey) {
        this.setState({
          activeKey: newActiveKey,
        });
        return;
      }
    }
    let found;
    React.Children.forEach(nextProps.children, (child: React.ReactElement<any>) => {
      if (child.key === newActiveKey) {
        found = true;
      }
    });
    if (found) {
      this.setActiveKey(newActiveKey, nextProps);
    } else {
      this.setActiveKey(getDefaultActiveKey(nextProps), nextProps);
    }
  }

  onTabClick = (key) => {
    const { onTabClick, onChange } = this.props;
    this.setActiveKey(key);
    onTabClick(key);
    if (this.state.activeKey !== key) {
      onChange(key);
    }
  }

  getIndexPair(props, currentActiveKey, activeKey) {
    const keys = [];
    React.Children.forEach(props.children, (c: any) => {
      keys.push(c.key);
    });
    const currentIndex = keys.indexOf(currentActiveKey);
    const nextIndex = keys.indexOf(activeKey);
    return {
      currentIndex, nextIndex, paneLength: keys.length,
    };
  }

  getPanes() {
    const { children, prefixCls, onTabClick } = this.props;
    const newChildren = [];
    React.Children.forEach(children, (child: any, idx) => {
      newChildren.push(React.cloneElement(child, {
        rootPrefixCls: prefixCls,
        activeKey: this.state.activeKey,
        onTabClick: this.onTabClick,
        itemKey: child.key,
        key: child.key,
      }));
    });
    return newChildren;
  }

  setActiveKey(activeKey, ps?: {}) {
    const props = ps || this.props;
    const currentActiveKey = this.state.activeKey;
    if (currentActiveKey === activeKey || (('activeKey' in props) && (props === this.props))) {
      return;
    }
    if (!currentActiveKey) {
      this.setState({
        activeKey,
      });
    } else {
      let { currentIndex, nextIndex, paneLength } = this.getIndexPair(props, currentActiveKey, activeKey);
      const tabMovingDirection = currentIndex > nextIndex ? 'backward' : 'forward';
      this.setState({
        activeKey,
        tabMovingDirection,
      }, () => {
        this.setInkBarStyle(paneLength, nextIndex);
      });
    }
  }

  setInkBarStyle(number, index) {
    const left = `${index * (100 / number)}%`;
    const right = `${(number - index - 1) * (100 / number)}%`;
    (this.refs as any).inkbar.style.left = left;
    (this.refs as any).inkbar.style.right = right;
  }

  render() {
    const { animation, children, prefixCls, tabPosition } = this.props;
    return (
      <div className="am-tab am-tab-no-animation">
        <div ref="tabpane" className="am-tab-tabpane">
          {this.getPanes()}
          <div ref="inkbar" className={`am-tab-ink-bar am-tab-ink-bar-transition-${this.state.tabMovingDirection}`}></div>
        </div>
        <TabContent
          itemWidth={this.state.itemWidth}
          rootPrefixCls={prefixCls}
          activeKey={this.state.activeKey}
          contents={children}
          animation={true}
        />
      </div>
    );
  }
}
