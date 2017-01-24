/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import classNames from 'classnames';
import Button from '../button';
import Flex from '../flex';
import PaginationProps from './PropsType';

export default class Pagination extends React.Component<PaginationProps, any> {
  static defaultProps = {
    prefixCls: 'am-pagination',
    mode: 'button',
    current: 0,
    simple: false,
    prevText: 'Prev',
    nextText: 'Next',
    onChange: () => { },
  };

  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      current: nextProps.current,
    });
  }

  onChange(p) {
    this.setState({
      current: p,
    });
    if (this.props.onChange) {
      this.props.onChange(p);
    }
  }

  render() {
    const { prefixCls, className, style, mode, total, simple, prevText, nextText } = this.props;
    const current = this.state.current;

    let markup = (
      <Flex>
        <Flex.Item className={`${prefixCls}-wrap-btn ${prefixCls}-wrap-btn-prev`}>
          <Button inline disabled={current <= 0} onClick={() => this.onChange(current - 1)}>{prevText}</Button>
        </Flex.Item>
        {this.props.children ? (<Flex.Item>{this.props.children}</Flex.Item>) : (!simple &&
          <Flex.Item className={`${prefixCls}-wrap`}>
            <span className="active">{current + 1}</span>/<span>{total}</span>
          </Flex.Item>)
        }
        <Flex.Item className={`${prefixCls}-wrap-btn ${prefixCls}-wrap-btn-next`}>
          <Button
            inline
            disabled={current >= total - 1}
            onClick={() => this.onChange(this.state.current + 1)}
          >
            {nextText}
          </Button>
        </Flex.Item>
      </Flex>
    );
    if (mode === 'number') {
      markup = (
        <div className={`${prefixCls}-wrap`}>
          <span className="active">{current + 1}</span>/<span>{total}</span>
        </div>
      );
    } else if (mode === 'pointer') {
      const arr: any = [];
      for (let i = 0; i < total; i++) {
        arr.push(
          <div
            key={`dot-${i}`}
            className={classNames({
              [`${prefixCls}-wrap-dot`]: true,
              [`${prefixCls}-wrap-dot-active`]: i === current,
            })}
          >
            <span />
          </div>,
        );
      }
      markup = <div className={`${prefixCls}-wrap`}>{arr}</div>;
    }
    return (
      <div
        className={classNames({ [className as string]: className, [prefixCls as string]: true })}
        style={style}
      >
        {markup}
      </div>
    );
  }
}
