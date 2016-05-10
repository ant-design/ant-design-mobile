import React from 'react';
import classNames from 'classnames';

function noop() {
}

function preventDefault(e) {
  e.preventDefault();
}

const InputNumber = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func,
    onKeyDown: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    max: React.PropTypes.number,
    min: React.PropTypes.number,
    step: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string,
    ]),
    mode: React.PropTypes.string,
    hideNumber: React.PropTypes.bool,
  },

  getDefaultProps() {
    return {
      prefixCls: 'rc-input-number',
      max: Infinity,
      min: -Infinity,
      step: 1,
      style: {},
      defaultValue: '',
      onChange: noop,
      onKeyDown: noop,
      onFocus: noop,
      onBlur: noop,
      mode: 'input',
      hideNumber: false,
    };
  },

  getInitialState() {
    let value;
    const props = this.props;
    if ('value' in props) {
      value = props.value;
    } else {
      value = props.defaultValue;
    }
    value = this.toPrecisionAsStep(value);
    return {
      inputValue: value,
      value: value,
      focused: props.autoFocus,
    };
  },

  componentDidMount() {
    this.componentDidUpdate();
  },

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      const value = this.toPrecisionAsStep(nextProps.value);
      this.setState({
        inputValue: value,
        value: value,
      });
    }
  },

  componentDidUpdate() {
    if (this.state.focused && document.activeElement !== this.refs.input) {
      this.refs.input.focus();
    }
  },

  onChange(event) {
    this.setInputValue(event.target.value.trim());
  },

  onKeyDown(e, ...args) {
    if (e.keyCode === 38) {
      this.up(e);
    } else if (e.keyCode === 40) {
      this.down(e);
    }
    this.props.onKeyDown(e, ...args);
  },

  onFocus(...args) {
    this.setState({
      focused: true,
    });
    this.props.onFocus(...args);
  },

  onBlur(e, ...args) {
    this.setState({
      focused: false,
    });
    const value = this.getCurrentValidValue(e.target.value.trim());
    this.setValue(value);
    this.props.onBlur(e, ...args);
  },

  onStepMouseDown(e) {
    e.preventDefault();
    const value = this.getCurrentValidValue(this.state.inputValue);
    this.setState({ value });
  },

  getCurrentValidValue(value) {
    let val = value;
    const props = this.props;
    if (val === '') {
      val = '';
    } else if (!isNaN(val)) {
      val = Number(val);
      if (val < props.min) {
        val = props.min;
      }
      if (val > props.max) {
        val = props.max;
      }
    } else {
      val = this.state.value;
    }
    return this.toPrecisionAsStep(val);
  },

  setValue(v) {
    if (!('value' in this.props)) {
      this.setState({
        value: v,
        inputValue: v,
      });
    }
    this.props.onChange(isNaN(v) || v === '' ? undefined : v);
  },

  setInputValue(v) {
    this.setState({
      inputValue: v,
    });
  },

  getPrecision() {
    const props = this.props;
    const stepString = props.step.toString();
    if (stepString.indexOf('e-') >= 0) {
      return parseInt(stepString.slice(stepString.indexOf('-e')), 10);
    }
    let precision = 0;
    if (stepString.indexOf('.') >= 0) {
      precision = stepString.length - stepString.indexOf('.') - 1;
    }
    return precision;
  },

  getPrecisionFactor() {
    const precision = this.getPrecision();
    return Math.pow(10, precision);
  },

  toPrecisionAsStep(num) {
    if (isNaN(num) || num === '') {
      return num;
    }
    const precision = this.getPrecision();
    return Number(Number(num).toFixed(precision));
  },

  upStep(val) {
    const { step, min } = this.props;
    const precisionFactor = this.getPrecisionFactor();
    let result;
    if (typeof val === 'number') {
      result = (precisionFactor * val + precisionFactor * step) / precisionFactor;
    } else {
      result = min === -Infinity ? step : min;
    }
    return this.toPrecisionAsStep(result);
  },

  downStep(val) {
    const { step, min } = this.props;
    const precisionFactor = this.getPrecisionFactor();
    let result;
    if (typeof val === 'number') {
      result = (precisionFactor * val - precisionFactor * step) / precisionFactor;
    } else {
      result = min === -Infinity ? -step : min;
    }
    return this.toPrecisionAsStep(result);
  },

  step(type, e) {
    if (e) {
      e.preventDefault();
    }
    const props = this.props;
    if (props.disabled) {
      return;
    }
    const value = this.state.value;
    if (isNaN(value)) {
      return;
    }
    const val = this[type + 'Step'](value);
    if (val > props.max || val < props.min) {
      return;
    }
    this.setValue(val);
    this.setState({
      focused: true,
    });
  },

  down(e) {
    this.step('down', e);
  },

  up(e) {
    this.step('up', e);
  },

  focus() {
    this.refs.input.focus();
  },

  render() {
    const props = {...this.props};
    // Remove React warning.
    // Warning: Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both).
    delete props.defaultValue;

    const prefixCls = props.prefixCls;
    const classes = classNames({
      [prefixCls]: true,
      [props.className]: !!props.className,
      [`${prefixCls}-disabled`]: props.disabled,
      [`${prefixCls}-focused`]: this.state.focused,
      ['segment']: props.mode === 'segment',
      [`${prefixCls}-hideNumber`]: !!props.hideNumber,
    });
    let upDisabledClass = '';
    let downDisabledClass = '';
    const value = this.state.value;
    if (!isNaN(value)) {
      const val = Number(value);
      if (val >= props.max) {
        upDisabledClass = `${prefixCls}-handler-up-disabled`;
      }
      if (val <= props.min) {
        downDisabledClass = `${prefixCls}-handler-up-disabled`;
      }
    } else {
      upDisabledClass = `${prefixCls}-handler-up-disabled`;
      downDisabledClass = `${prefixCls}-handler-up-disabled`;
    }

    // focus state, show input value
    // unfocus state, show valid value
    let inputDisplayValue;
    if (this.state.focused) {
      inputDisplayValue = this.state.inputValue;
    } else {
      inputDisplayValue = this.state.value;
    }

    // ref for test
    return props.mode === 'input' ? (
      <div className={classes} style={props.style}>
        <div className={`${prefixCls}-handler-wrap`}>
          <a unselectable="unselectable"
             ref="up"
             onClick={upDisabledClass ? noop : this.up}
             onMouseDown={this.onStepMouseDown}
             className={`${prefixCls}-handler ${prefixCls}-handler-up ${upDisabledClass}`}>
            <span unselectable="unselectable" className={`${prefixCls}-handler-up-inner`}
                  onClick={preventDefault}/>
          </a>
          <a unselectable="unselectable"
             ref="down"
             onMouseDown={this.onStepMouseDown}
             onClick={downDisabledClass ? noop : this.down}
             className={`${prefixCls}-handler ${prefixCls}-handler-down ${downDisabledClass}`}>
            <span unselectable="unselectable" className={`${prefixCls}-handler-down-inner`}
                  onClick={preventDefault}/>
          </a>
        </div>
        <div className={`${prefixCls}-input-wrap`}>
          <input {...props}
            style={null}
            className={`${prefixCls}-input`}
            autoComplete="off"
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onKeyDown={this.onKeyDown}
            autoFocus={props.autoFocus}
            readOnly={props.readOnly}
            disabled={props.disabled}
            max={props.max}
            min={props.min}
            name={props.name}
            onChange={this.onChange}
            ref="input"
            value={inputDisplayValue}
          />
        </div>
      </div>
    ): (
      <div className={classes} style={props.style}>
        <div unselectable="unselectable"
           ref="down"
           onClick={downDisabledClass ? noop : this.down}
           className={`${prefixCls}-handler ${prefixCls}-handler-down ${downDisabledClass}`}>
          <span unselectable="unselectable" className={`${prefixCls}-handler-down-inner`}
                onClick={preventDefault}/>
        </div>
        <div className={`${prefixCls}-input-wrap`}>
          <input {...props}
            style={null}
            className={`${prefixCls}-input`}
            disabled
            max={props.max}
            min={props.min}
            name={props.name}
            ref="input"
            value={inputDisplayValue}
          />
        </div>
        <div unselectable="unselectable"
           ref="up"
           onClick={upDisabledClass ? noop : this.up}
           className={`${prefixCls}-handler ${prefixCls}-handler-up ${upDisabledClass}`}>
          <span unselectable="unselectable" className={`${prefixCls}-handler-up-inner`}
                onClick={preventDefault}/>
        </div>
      </div>
    );
  },
});

module.exports = InputNumber;
