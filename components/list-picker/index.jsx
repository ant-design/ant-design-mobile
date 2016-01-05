/* eslint no-console:0 */

import 'rmc-picker/assets/index.css';
import 'rmc-modal/assets/index.css';
import Picker from 'rmc-picker';
import Modal from 'rmc-modal';
import React, {PropTypes} from 'react';

const emptyArray = [];

function noop() {
}

function getValue0(items) {
  return items && items[0] && items[0].value;
}

function loop(ds, fn) {
  ds.forEach((d)=> {
    fn(d);
    if (d.c) {
      loop(d.c, fn);
    }
  });
}

const ListPicker = React.createClass({
  propTypes: {
    value: PropTypes.array,
    colCount: PropTypes.number,
    onChange: PropTypes.func,
    modalVisible: PropTypes.bool,
    srcData: PropTypes.array,
    onModalVisibleChange: PropTypes.func,
  },
  getDefaultProps() {
    return {
      srcData: [],
      onModalVisibleChange() {
      },
      onChange: noop,
      colCount: 3
    };
  },
  getInitialState() {
    const dataMap = {};

    let data = this.props.srcData;

    loop(data, (d)=> {
      d.value = d.i;
      d.label = d.n;
      d.children = d.c;
      dataMap[d.value] = d;
    });

    this.dataMap = dataMap;

    const value = [];

    for (let i = 0; i < this.props.colCount; i++) {
      if (data && data.length) {
        value[i] = data[0].value;
        data = data[0].children;
      } else {
        value[i] = undefined;
      }
    }

    this.defaultValue = value;

    return {
      pickerValue: null,
      modalVisible: this.props.modalVisible || false,
    };
  },
  componentWillReceiveProps(nextProps) {
    if ('modalVisible' in nextProps) {
      this.setState({
        modalVisible: nextProps.modalVisible,
      });
    }
  },
  hide() {
    this.setState({
      pickerValue: null,
    });
    this.setVisibleState(false);
  },
  show() {
    this.setVisibleState(true);
  },
  onOk() {
    this.props.onChange(this.getPickerValue().concat());
    this.hide();
  },
  onValueChange(index, selectNameValue) {
    const pickerValue = this.getPickerValue().concat();
    pickerValue[index] = selectNameValue;
    for (let i = index + 1; i < pickerValue.length; i++) {
      pickerValue[i] = getValue0(this.dataMap[pickerValue[i - 1]].children);
    }
    this.setState({
      pickerValue,
    });
  },
  setVisibleState(modalVisible) {
    if (!('modalVisible' in this.props)) {
      this.setState({
        modalVisible,
      });
    }
    this.props.onModalVisibleChange(modalVisible);
  },
  getValue() {
    return this.props.value || this.defaultValue;
  },
  getPickerValue() {
    return this.state.pickerValue || this.getValue();
  },
  getSel() {
    if (this.props.value) {
      return this.props.value.map((v)=> {
        if (v) {
          return this.dataMap[v].label;
        }
        return '';
      }).filter(v=>!!v).join(',');
    }
  },
  render() {
    let pickers = [];
    const value = this.getPickerValue();

    if (this.state.modalVisible) {
      pickers = value.map((v, i) => {
        const d = i === 0 ? this.props.srcData : this.dataMap[value[i - 1]] && this.dataMap[value[i - 1]].children;
        return (<div key={i} className={'am-picker-item'}>
          <Picker defaultSelectedValue={v} onValueChange={this.onValueChange.bind(this, i)}>
            {d || emptyArray}
          </Picker>
        </div>);
      });
    }

    const extraProps = {
      onClick: this.show,
      extra: this.getSel() || '请选择',
    };

    const childEl = React.cloneElement(this.props.children, extraProps);

    const modal = this.state.modalVisible ? <Modal visible
                                                   style={{left: 0, bottom: 0}}
                                                   onDismiss={this.hide}>
      <div className={'am-picker-header'}>
        <div className={'am-picker-item'} onClick={this.hide}>取消</div>
        <div className={'am-picker-item'}></div>
        <div className={'am-picker-item'} onClick={this.onOk}>确认</div>
      </div>
      <div className={'am-picker-content'}>
        {pickers}
      </div>
    </Modal> : null;
    return (
      <div>
        {modal}
        {childEl}
      </div>
    );
  },
});
export default ListPicker;
