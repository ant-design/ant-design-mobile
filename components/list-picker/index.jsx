/* eslint no-console:0 */

import 'rmc-picker/assets/index.css';
import 'rmc-modal/assets/index.css';
import Picker from 'rmc-picker';
import Modal from 'rmc-modal';
import React, {PropTypes} from 'react';
import {treeFilter} from '../utils/treeFilter';

const emptyArray = [];

function noop() {
}

const ListPicker = React.createClass({
  propTypes: {
    value: PropTypes.array,
    cols: PropTypes.number,
    onChange: PropTypes.func,
    modalVisible: PropTypes.bool,
    data: PropTypes.array,
    onModalVisibleChange: PropTypes.func,
  },
  getDefaultProps() {
    return {
      data: [],
      onModalVisibleChange() {
      },
      onChange: noop,
      cols: 3
    };
  },
  getInitialState() {
    let data = this.props.data;

    const value = [];

    for (let i = 0; i < this.props.cols; i++) {
      if (data && data.length) {
        value[i] = data[0].i;
        data = data[0].c;
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
    const children = treeFilter(this.props.data, (c, level) => {
      return level <= index && c.i === pickerValue[level];
    });
    let data = children[index];
    for (let i = index + 1; data && data.children && data.children.length && i < pickerValue.length; i++) {
      data = data.c[0];
      pickerValue[i] = data.i;
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
  getColArray() {
    const ret = [];
    for (let i = 0; i < this.props.cols; i++) {
      ret[i] = undefined;
    }
    return ret;
  },
  getSel() {
    const value = this.props.value || [];
    const treeChildren = treeFilter(this.props.data, (c, level)=> {
      return c.i === value[level];
    }, {});
    return treeChildren.map((v)=> {
      return v.n;
    }).join(',');
  },
  render() {
    let pickers = [];
    const value = this.getPickerValue();

    if (this.state.modalVisible) {
      const childrenTree = treeFilter(this.props.data, (c, level) => {
        return c.i === value[level];
      }).map(c => c.c);
      childrenTree.length = this.props.cols - 1;
      childrenTree.unshift(this.props.data);
      pickers = (this.getColArray().map((v, i) => {
        let d = childrenTree[i] || emptyArray;
        d = d.map((item) => {
          return {
            label: item.n,
            value: item.i,
          };
        });
        return (<div key={i} className={'am-picker-item'}>
          <Picker selectedValue={value[i]} onValueChange={this.onValueChange.bind(this, i)}>
            {d}
          </Picker>
        </div>);
      }));
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
