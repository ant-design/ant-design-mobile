/* tslint:disable:jsx-no-multiline-js */
import classnames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { getComponentLocale } from '../_util/getLocale';
import Button from '../button';
import Flex from '../flex';
import { PaginationPropsType, PaginationState } from './PropsType';
export interface PaginationProps extends PaginationPropsType {
  style?: React.CSSProperties;
  prefixCls?: string;
  className?: string;
}
export default class Pagination extends React.Component<
  PaginationProps,
  PaginationState
> {
  static defaultProps = {
    prefixCls: 'am-pagination',
    mode: 'button',
    current: 1,
    total: 0,
    simple: false,
    onChange: () => {},
  };

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  constructor(props: PaginationProps) {
    super(props);
    this.state = {
      current: props.current,
    };
  }

  componentWillReceiveProps(nextProps: PaginationProps) {
    if (nextProps.current !== this.state.current) {
      this.setState({
        current: nextProps.current,
      });
    }
  }

  onChange(p: number) {
    this.setState({
      current: p,
    });
    if (this.props.onChange) {
      this.props.onChange(p);
    }
  }

  render() {
    const { prefixCls, className, style, mode, total, simple } = this.props;
    const { current } = this.state;
    const locale = getComponentLocale(
      this.props,
      this.context,
      'Pagination',
      () => require('./locale/zh_CN'),
    );
    const { prevText, nextText } = locale;

    let markup = (
      <Flex>
        <Flex.Item
          className={`${prefixCls}-wrap-btn ${prefixCls}-wrap-btn-prev`}
        >
          <Button
            inline
            disabled={current <= 1}
            onClick={() => this.onChange(current - 1)}
          >
            {prevText}
          </Button>
        </Flex.Item>
        {this.props.children ? (
          <Flex.Item>{this.props.children}</Flex.Item>
        ) : (
          !simple && (
            <Flex.Item className={`${prefixCls}-wrap`} aria-live="assertive">
              <span className="active">{current}</span>/<span>{total}</span>
            </Flex.Item>
          )
        )}
        <Flex.Item
          className={`${prefixCls}-wrap-btn ${prefixCls}-wrap-btn-next`}
        >
          <Button
            inline
            disabled={current >= total}
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
          <span className="active">{current}</span>/<span>{total}</span>
        </div>
      );
    } else if (mode === 'pointer') {
      const arr: any = [];
      for (let i = 0; i < total; i++) {
        arr.push(
          <div
            key={`dot-${i}`}
            className={classnames(`${prefixCls}-wrap-dot`, {
              [`${prefixCls}-wrap-dot-active`]: i + 1 === current,
            })}
          >
            <span />
          </div>,
        );
      }
      markup = <div className={`${prefixCls}-wrap`}>{arr}</div>;
    }
    const cls = classnames(prefixCls, className);
    return (
      <div className={cls} style={style}>
        {markup}
      </div>
    );
  }
}
