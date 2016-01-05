/* eslint no-console:0 */

import 'rmc-picker/assets/index.css';
import 'rmc-modal/assets/index.css';
import Picker from 'rmc-picker';
import Modal from 'rmc-modal';
import React, {PropTypes} from 'react';
function noop() {
}//i c n -> id, children, label
function convertData(arr) {
  return arr.map((item)=> {
    if (item.c) {
      item.children = convertData(item.c);
    }
    return {
      label: item.label || item.n,
      value: item.value || item.i,
      children: item.children || item.c
    };
  });
}
const ListPicker = React.createClass({
  propTypes: {
    selected: PropTypes.array,
    colCount: PropTypes.number,
    onChange: PropTypes.func,
    modalVisible: PropTypes.bool,
    // onModalVisibleChange: PropTypes.func,
    modalEl : PropTypes.any
  },
  getDefaultProps() {
    return {
      value: [],
      srcData: [],
      onChange: noop,
      colCount: 3,
      modalEl: Modal,
    };
  },
  getInitialState() {
    const collectResult = [];
    const selectedResult = this.props.value;
    const ifNeedInitSelectValue = !selectedResult.length;
    let data = convertData(this.props.srcData);
    if (ifNeedInitSelectValue) {
      let currentCollectionA = data;
      for (let i = 0; i < this.props.colCount; i++) {
        if (currentCollectionA && currentCollectionA.length) {
          selectedResult.push(currentCollectionA[0].value);
          currentCollectionA = currentCollectionA[0].children || [];
        } else {
          selectedResult.push(null);
          currentCollectionA = [];
        }
      }
    }
    //get render list
    let currentCollectionB = data;
    for (let j = 0; j < this.props.colCount; j++) {
      collectResult.push(currentCollectionB);
      let selectedFather = this.findItemInCollection(currentCollectionB, selectedResult[j]) || currentCollectionB[0] || {children: []};
      currentCollectionB = selectedFather.children;
    }
    //set state
    const newState = {
      collectionToRender: collectResult,
      data: data
    };
    if (ifNeedInitSelectValue) {
      newState.value = selectedResult;
    }
    return {
      modalVisible: false,
      value: ifNeedInitSelectValue ? selectedResult : this.props.value,
      selectedName: [],
      collectionToRender: collectResult,
      data: data
    };
  },
  componentWillReceiveProps(nextProps) {
    // if ('modalVisible' in nextProps) {
    this.setState({
      modalVisible: nextProps.modalVisible,
    });
    // }
  },
  findItemInCollection(collection, value){
    let result = null;
    collection.forEach((item)=> {
      if (item.value === value) {
        result = item;
      }
    });
    return result;
  },
  findItemByValue(collection, value){
    let result;
    collection.forEach((item)=> {
      if (item.value === value) {
        result = item;
      } else if (item.children && item.children.length) {
        result = result || this.findItemByValue(item.children, value);
      } else {
        result = result || null;
      }
    });
    return result;
  },
  componentDidMount(){
  },
  hide() {
    this.setVisibleState(false);
  },
  show() {
    this.setVisibleState(true);
  },
  onFinish() {
    this.hide();
    this.props.onChange(this.state.value);
  },
  onValueChange(index, item, value) {
    const currentRender = this.state.collectionToRender;//update renderCollection
    let nextRender = currentRender;
    let levelData = convertData(this.findItemByValue(this.state.data, value).children);//  convertData(value.children);
    let levelIndex = index + 1;
    let stateValue = this.state.value;
    stateValue[index] = value;
    while (levelIndex <= currentRender.length - 1) {
      nextRender[levelIndex] = levelData || [];
      stateValue[levelIndex] = levelData.length ? levelData[0].value : null;
      levelData = nextRender[levelIndex].length ? nextRender[levelIndex][0].children : [];
      ++levelIndex;
    }
    this.setState({
      collectionToRender: nextRender,
      value: stateValue
    });
  },
  setVisibleState(modalVisible) {
    // if(!('modalVisible' in this.props)) {
    this.setState({
      modalVisible,
    });
    // }
    // this.props.onModalVisibleChange(modalVisible);
  },
  render() {
    const pickers = [];
    for (let i = 0; i < this.state.collectionToRender.length; i++) {
      let item = this.state.collectionToRender[i];
      pickers.push(
        <div key={'item' + i} className={'am-picker-item'}>
          <Picker selectedValue={this.state.value[i]} onValueChange={this.onValueChange.bind(this, i, item)}>
            {item}
          </Picker>
        </div>
      );
    }
    const selectItemNames = [];
    this.state.value.forEach((v)=> {
      let item = this.findItemByValue(this.state.data, v);
      if (item && item.label) {
        selectItemNames.push(item.label);
      }
    });
    const extraProps = {
      onClick: this.show,
      extra: selectItemNames.length ? selectItemNames[selectItemNames.length - 1] : '请选择'
    };
    const childEl = React.cloneElement(this.props.children, extraProps);
    const modalEl = this.props.modalEl;
    let modal;
    if( !this.state.modalVisible ){
      modal = null;
    } else{
      const modalChild = (
        <div>
          <div className={'am-picker-header'}>
            <div className={'am-picker-item'} onClick={this.hide}>取消</div>
            <div className={'am-picker-item'}></div>
            <div className={'am-picker-item'} onClick={this.onFinish}>确认</div>
          </div>
          <div className={'am-picker-content'}>
            {pickers}
          </div>
        </div>
      );
      modal = React.createElement(modalEl, {
        visible: true,
        style: { left: 0, bottom: 0 },
        onUserDismissModal: this.hide,
      }, modalChild);
    }

    return (
      <div>
        {modal}
        {childEl}
      </div>
    );
  },
});
export default ListPicker;
