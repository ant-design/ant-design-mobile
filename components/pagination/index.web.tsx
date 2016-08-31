import * as React from 'react';
import classNames from 'classnames';
import Button from '../button';
import Flex from '../flex';
import PaginationProps from './PaginationPropTypes';

function noop() {
}

export default class Pagination extends React.Component<PaginationProps, any> {
  static defaultProps = {
    prefixCls: 'am-pagination',
    mode: 'button',
    current: 0,
    simple: false,
    prevText: 'Prev',
    nextText: 'Next',
    onChange: noop,
  };

  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
    };
    this.onPrev = this.onPrev.bind(this);
    this.onNext = this.onNext.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      current: nextProps.current,
    });
  }

  _hasPrev() {
    return this.state.current > 0;
  }

  _hasNext() {
    return this.state.current < this.props.total;
  }

  _handleChange(p) {
    this.setState({
      current: p,
    });
    this.props.onChange(p);
    return p;
  }

  onPrev() {
    this._handleChange(this.state.current - 1);
  }

  onNext() {
    this._handleChange(this.state.current + 1);
  }

  getIndexes(count) {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(i);
    }
    return arr;
  }

  render() {
    const { prefixCls, className, mode, total, simple,
      prevText, nextText } = this.props;
    const current = this.state.current;
    const numWrapCls = classNames({
      className,
      [`${prefixCls}-wrap`]: true,
    });
    let markup;
    switch (mode) {
      case 'button':
        markup = (
          <Flex>
            <Flex.Item className={`${prefixCls}-wrap-btn`}>
              <Button
                inline
                disabled={current <= 0}
                onClick={this.onPrev}
              >
                {prevText}
              </Button>
            </Flex.Item>
            {this.props.children ? (<Flex.Item>{this.props.children}</Flex.Item>) : (!simple &&
              <Flex.Item className={numWrapCls}>
                <span className="active">{current + 1}</span>/<span>{total}</span>
              </Flex.Item>)
            }
            <Flex.Item>
              <Button
                disabled={current >= total - 1}
                inline
                onClick={this.onNext}>{nextText}
              </Button>
            </Flex.Item>
          </Flex>
        );
        break;
        case 'number':
          markup = (
            <div className={numWrapCls}>
              <span className="active">{current + 1}</span>/<span>{total}</span>
            </div>
          );
          break;
        case 'pointer':
          const indexes = this.getIndexes(total);
          markup = (
            <div className={numWrapCls}>
              { indexes.map(function(index) {
                  const dotCls = classNames({
                    [`${prefixCls}-wrap-dot`]: true,
                    [`${prefixCls}-wrap-dot-active`]: index === current,
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
          break;
      default:
        markup = false;
        break;
    }
    return (
      <div className={prefixCls}>
        {markup}
      </div>
    );
  }
}
