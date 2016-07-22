import * as React from 'react';
import classNames from 'classnames';
import Button from '../button';
import Flex from '../flex';

export default class Pagination extends React.Component<any, any> {
  static defaultProps = {
    prefixCls: 'am-pagination',
    mode: 'button',
    size: 'large',
    showNumber: true,
    prevText: 'Prev',
    nextText: 'Next',
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: this.props.activeIndex || 0,
    };
    this.onPrevHandler = this.onPrevHandler.bind(this);
    this.onNextHandler = this.onNextHandler.bind(this);
  }

  getIndexes(count) {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(i);
    }
    return arr;
  }

  onPrevHandler() {
    this.setState({activeIndex: this.state.activeIndex - 1});
  }

  onNextHandler() {
    this.setState({activeIndex: this.state.activeIndex + 1});
  }

  render() {
    const { prefixCls, className, mode, size, showNumber,
      prevText, nextText, total } = this.props;
    const numWrapCls = classNames({
      [className]: !!className,
      [`${prefixCls}-wrap`]: true,
      [`${prefixCls}-wrap-lg`]: size === 'large',
      [`${prefixCls}-wrap-sm`]: size === 'small',
    });
    const activeIndex = this.state.activeIndex;
    if (mode === 'button') {
      return (
        <div className={prefixCls}>
          <Flex>
            <Flex.Item className={`${prefixCls}-wrap-btn`}>
              <Button
                size={size}
                inline
                disabled={this.state.activeIndex <= 0}
                onClick={this.onPrevHandler}>{prevText}
              </Button>
            </Flex.Item>
            {!!showNumber &&
              <Flex.Item className={numWrapCls}>
                <span className="active">{activeIndex + 1}</span>/<span>{total}</span>
              </Flex.Item>
            }
            <Flex.Item>
              <Button
                size={size}
                disabled={this.state.activeIndex >= total - 1}
                inline
                onClick={this.onNextHandler}>{nextText}
              </Button>
            </Flex.Item>
          </Flex>
        </div>
      );
    } else if (mode === 'number') {
      return (
        <div className={numWrapCls}>
          <span className="active">{activeIndex + 1}</span>/<span>{total}</span>
        </div>
      );
    } else {
      const indexes = this.getIndexes(total);
      return (
        <div className={numWrapCls}>
          { indexes.map(function(index) {
              const dotCls = classNames({
                [`${prefixCls}-wrap-dot`]: true,
                [`${prefixCls}-wrap-dot-active`]: index === activeIndex,
              });
              return (
                <div className={dotCls} key={`dot-${index}`}>
                  <span></span>
                </div>
              );
            })
          }
        </div>
      );
    }
  }
}
