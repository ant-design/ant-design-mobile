import React from 'react';
import { StickyPropTypes } from './PropsType';
import classnames from 'classnames';

export interface StickyProps extends StickyPropTypes {
  prefixCls?: string;
  stickTop?: number;
  className?: object;
  children: any;
  props?: any;
  onSticky?: Function;
  offSticky?: Function;
  disable: boolean;
  isHidden: boolean;
}

const noop = () => {};
const userAgent = window.navigator.userAgent;

/*
* android platform: EventListner
* iOS: (position:sticky)
*/
export default class Sticky extends React.Component<StickyProps, any> {
  static defaultProps = {
    prefixCls: 'am-sticky',
    stickTop: 0,
    style: {},
    className: {},
    children: null,
    onSticky: noop,
    offSticky: noop,
    disable: false,
    isHidden: false, // ancestor containers have overflow: hidden or overflow: auto property.
  };

  stickyRef: any;
  initiated: boolean; // first load, get the initiated position to top
  start: boolean;
  initTop: number;
  insideContainerCache: Array<object>;
  platform: string;
  isIOS: boolean;

  constructor(props: any) {
    super(props);
    this.state = {
      sticking: false,
    };
    this.platform = /iphone|ipad|ipod/i.test(userAgent) ? 'iOS' : 'android';
    this.isIOS = /iphone|ipad|ipod/i.test(userAgent);
    this.initiated = false;
    this.initTop = 0;
    this.insideContainerCache = [];
  }

  setStickyRef = (element: any) => {
    this.stickyRef = element;
  }

  checkDescendent(nodeA: Node, nodeB: Node) {
    if (!nodeB) {
      return;
    }
    while (nodeB.parentNode) {
      if (nodeB.parentNode === nodeA) {
        return true;
      }
      nodeB = nodeB.parentNode;
    }
    return false;
  }

  getTop(el: HTMLElement) {
    let top = el.offsetTop;
    let currentParent  = el.offsetParent as HTMLElement;
    while (currentParent != null) {
      top += currentParent.offsetTop;
      currentParent = currentParent.offsetParent as HTMLElement;
    }
    return top;
  }

  // 滚动
  handleScroll(e: Event ) {
    if (!e.target) {
      return;
    }

    if (!this.initiated) {
      const stickDiv = this.stickyRef;
      this.initTop = this.getTop(stickDiv);
      this.initiated = true;
    }

    const tar = e.target as HTMLElement;

    if (this.insideContainerCache.indexOf(tar) === -1) {
      if (this.checkDescendent(tar, this.stickyRef)) {
        this.insideContainerCache.push(tar);
      } else {
        return;
      }
    }

    const scrollTop = tar.scrollTop + tar.offsetTop || window.pageYOffset;
    let scrollTriger: number = 0;

    if (this.props.stickTop) {
      scrollTriger = this.initTop - this.props.stickTop - 10 ;
    } else {
      scrollTriger = this.initTop - 10;
    }

    if (scrollTop <= scrollTriger) {
      if (this.state.sticking) {
        if (this.props.offSticky) {
          this.props.offSticky();
        }
        this.setState({
          sticking: false,
        });
      }
    } else {
      if (!this.state.sticking) {
        if (this.props.onSticky) {
          this.props.onSticky();
        }
        this.setState({
          sticking: true,
        });
      }
    }
  }

  componentDidMount() {
    if (this.platform === 'android' && !this.props.disable) {
      document.addEventListener('scroll', this.handleScroll.bind(this), true);
    }
  }

  componentWillUnmount() {
    // remove event listener
    if (this.platform === 'android' && !this.props.disable) {
      document.removeEventListener('scroll', this.handleScroll, true);
      this.insideContainerCache = [];
    }
  }

  render() {
    const { stickTop, style, className, prefixCls, disable, isHidden, ...restProps } = this.props;
    let children = this.props.children;

    const originalChildren = children;
    let childrenBlock = null;

    if (disable) {
      const classCls = classnames(className);
      return <div className={classCls} {...restProps} >{originalChildren}</div>;
    }

    // iOS
    const wrapCls = classnames({
      [`${prefixCls}-default`]: true,
      [`${prefixCls}-top-ios`]: this.isIOS,
      [`${prefixCls}-fixwrap`]: this.state.sticking,
    });

    // android
    if (this.platform === 'android' && !disable ) {
      childrenBlock = React.cloneElement(originalChildren, {
        style: {
          visibility: 'hidden',
        },
      });
      // sticky children
      children = React.cloneElement(originalChildren, {
        className: classnames(className, {
          [`${prefixCls}-sticking`]: this.state.sticking,
          [originalChildren.props.className]: true,
        }),
        style: { top: stickTop + 'px' },
      });

    } else if (this.platform === 'iOS' && !disable) {
      children = originalChildren;
    }
    const topStyle = this.isIOS ? { top: stickTop + 'px' } : null;

    return (
      <div ref={this.setStickyRef} className={wrapCls} style={{ ...topStyle }} {...restProps} >
        {this.state.sticking ? childrenBlock : null}
        {children}
      </div>
    );
  }

}
