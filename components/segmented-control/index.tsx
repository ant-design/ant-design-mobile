import classnames from 'classnames';
import * as React from 'react';
import TouchFeedback from 'rmc-feedback';
import { SegmentedControlPropsType } from './PropsType';

export interface SegmentedControlProps extends SegmentedControlPropsType {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default class SegmentedControl extends React.Component<
  SegmentedControlProps,
  any
> {
  static defaultProps = {
    prefixCls: 'am-segment',
    selectedIndex: 0,
    disabled: false,
    values: [],
    onChange() {},
    onValueChange() {},
    style: {},
    tintColor: '',
  };

  constructor(props: SegmentedControlProps) {
    super(props);
    this.state = {
      selectedIndex: props.selectedIndex,
    };
  }

  componentWillReceiveProps(nextProps: SegmentedControlProps) {
    if (nextProps.selectedIndex !== this.state.selectedIndex) {
      this.setState({
        selectedIndex: nextProps.selectedIndex,
      });
    }
  }

  onClick(e: React.MouseEvent<HTMLDivElement>, index: any, value: any) {
    const { disabled, onChange, onValueChange } = this.props;
    if (!disabled && this.state.selectedIndex !== index) {
      // just do a mock so that the api to be the same as react-native
      e.nativeEvent = e.nativeEvent ? e.nativeEvent : ({} as any);
      (e.nativeEvent as any).selectedSegmentIndex = index;
      (e.nativeEvent as any).value = value;
      if (onChange) {
        onChange(e);
      }
      if (onValueChange) {
        onValueChange(value);
      }
      this.setState({
        selectedIndex: index,
      });
    }
  }

  renderSegmentItem(idx: number, value: string, selected: boolean) {
    const { prefixCls, disabled, tintColor } = this.props;

    const itemCls = classnames(`${prefixCls}-item`, {
      [`${prefixCls}-item-selected`]: selected,
    });

    const itemStyle = {
      color: selected ? '#fff' : tintColor,
      backgroundColor: selected ? tintColor : 'transparent',
      borderColor: tintColor,
    };

    const activeInnerStyle: any = tintColor
      ? {
          backgroundColor: tintColor,
        }
      : {};

    return (
      <TouchFeedback
        key={idx}
        disabled={disabled}
        activeClassName={`${prefixCls}-item-active`}
      >
        <div
          className={itemCls}
          style={itemStyle}
          role="tab"
          aria-selected={selected && !disabled}
          aria-disabled={disabled}
          onClick={disabled ? undefined : e => this.onClick(e, idx, value)}
        >
          <div className={`${prefixCls}-item-inner`} style={activeInnerStyle} />
          {value}
        </div>
      </TouchFeedback>
    );
  }

  render() {
    const { className, prefixCls, style, disabled, values = [] } = this.props;

    const wrapCls = classnames(className, prefixCls, {
      [`${prefixCls}-disabled`]: disabled,
    });

    return (
      <div className={wrapCls} style={style} role="tablist">
        {values.map((value, idx) =>
        // tslint:disable-next-line:jsx-no-multiline-js
          this.renderSegmentItem(idx, value, idx === this.state.selectedIndex),
        )}
      </div>
    );
  }
}
