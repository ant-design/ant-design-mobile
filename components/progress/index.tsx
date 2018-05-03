import classnames from 'classnames';
import * as React from 'react';
import { ProgressPropsType } from './PropsType';

export interface ProgressProps extends ProgressPropsType {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  barStyle?: React.CSSProperties;
}

export default class Progress extends React.Component<ProgressProps, any> {
  static defaultProps = {
    prefixCls: 'am-progress',
    percent: 0,
    position: 'fixed',
    unfilled: true,
    appearTransition: false,
  };

  barRef: HTMLDivElement | null;
  private noAppearTransition: boolean;

  componentWillReceiveProps() {
    this.noAppearTransition = true;
  }
  componentDidMount() {
    if (this.props.appearTransition) {
      setTimeout(() => {
        if (this.barRef) {
          this.barRef.style.width = `${this.props.percent}%`;
        }
      }, 10);
    }
  }
  render() {
    const {
      className,
      prefixCls,
      position,
      unfilled,
      style = {},
      barStyle = {},
    } = this.props;
    const percentStyle = {
      width:
        this.noAppearTransition || !this.props.appearTransition
          ? `${this.props.percent}%`
          : 0,
      height: 0,
    };

    const wrapCls = classnames(`${prefixCls}-outer`, className, {
      [`${prefixCls}-fixed-outer`]: position === 'fixed',
      [`${prefixCls}-hide-outer`]: !unfilled,
    });

    return (
      <div
        style={style}
        className={wrapCls}
        role="progressbar"
        aria-valuenow={this.props.percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          ref={el => (this.barRef = el)}
          className={`${prefixCls}-bar`}
          style={{ ...barStyle, ...percentStyle }}
        />
      </div>
    );
  }
}
