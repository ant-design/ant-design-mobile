/* eslint no-console:0 */

import 'rmc-picker/assets/index.css';
import 'rmc-modal/assets/index.css';
import 'rmc-modal/assets/simple.css';
import Picker, {Item as PickerItem} from 'rmc-picker';
import Modal from 'rmc-modal';
import React, {PropTypes} from 'react';
function noop(){}//i c n -> id, children, name
function convertData(arr){
  return arr.map((item)=>{
    if(item.c){
      item.children = convertData(item.c);
    }
    return {
      name     : item.name || item.n,
      value    : item.value || item.i,
      children : item.children || item.c
    };
  });
}
const ListPicker = React.createClass({
  propTypes: {
    selected : React.PropTypes.array,
    colcount : React.PropTypes.number,
    onDestroy : PropTypes.func
  },
  getDefaultProps() {
    return {
      prefixCls     : 'rmc-picker',
      modalPrefixCls: 'rmc-modal',
      value         : [],
      srcData       : [],
      onDestroy     : noop,
      colcount      : 3
    };
  },
  getInitialState() {
    const collectResult = [];
    const selectedResult = this.props.value;
    const ifNeedInitSelectValue = !selectedResult.length;
    let data = convertData(this.props.srcData);
    if(ifNeedInitSelectValue){
      let currentCollectionA = data;
      for(let i = 0; i < this.props.colcount; i++){
        if(currentCollectionA && currentCollectionA.length){
          selectedResult.push(currentCollectionA[0].value);
          currentCollectionA = currentCollectionA[0].children || [];
        } else{
          selectedResult.push(null);
          currentCollectionA = [];
        }
      }
    }
    //get render list
    let currentCollectionB = data;
    for(let j = 0; j < this.props.colcount; j++ ){
      collectResult.push(currentCollectionB);
      let selectedFather = this.findItemInCollection(currentCollectionB, selectedResult[j]) || currentCollectionB[0] || {children : []};
      currentCollectionB = selectedFather.children;
    }
    //set state
    const newState = {
      collectionToRender : collectResult,
      data : data
    };
    if(ifNeedInitSelectValue){
      newState.value = selectedResult;
    }
    return {
      value              : ifNeedInitSelectValue ? selectedResult : this.props.value,
      selectedName       : [],
      collectionToRender : collectResult,
      data               : data
    };
  },
  findItemInCollection(collection, value){
    let result = null;
    collection.forEach((item)=>{
      if(item.value === value){
        result = item;
      }
    });
    return result;
  },
  findItemByValue(collection, value){
    let result;
    collection.forEach((item)=>{
      if(item.value === value){
        result = item;
      } else if(item.children && item.children.length){
        result = result || this.findItemByValue(item.children, value);
      } else{
        result = result || null;
      }
    });
    return result;
  },
  componentWillUnmount(){
    this.props.onDestroy(this.state.value);
  },
  onFinish(){
    window.history.back();
  },
  onCancel(){
    this.setState({
      value : this.props.value
    });
    window.history.back();
  },
  onValueChange(index, item, value) {
    const currentRender = this.state.collectionToRender;//update renderCollection
    let nextRender = currentRender;
    let levelData = convertData(this.findItemByValue(this.state.data, value).children);//  convertData(value.children);
    let levelIndex = index + 1;
    let stateValue = this.state.value;
    stateValue[index] = value;
    while(levelIndex <= currentRender.length - 1){
      nextRender[levelIndex] = levelData || [];
      stateValue[levelIndex] = levelData.length ? levelData[0].value : null;
      levelData = nextRender[levelIndex].length ? nextRender[levelIndex][0].children : [];
      ++levelIndex;
    }
    this.setState({
      collectionToRender : nextRender,
      value              : stateValue
    });
  },
  render() {
    const props = this.props;
    const pickers = [];
    for(let i = 0; i < this.state.collectionToRender.length; i++ ){
      let item = this.state.collectionToRender[i];
      pickers.push(
        <div key={'item' + i} className={`${props.modalPrefixCls}-item`}>
          <Picker selectedValue={this.state.value[i]} onValueChange={this.onValueChange.bind(this, i, item)} >
            {item.map((it) => {
              return <PickerItem key={it.value} value={it.value} label={it.name} />;
            })}
          </Picker>
        </div>
      );
    }
    const selectItemNames = [];
    this.state.value.forEach((v)=>{
      let item = this.findItemByValue(this.state.data, v);
      if(item && item.name){
        selectItemNames.push(item.name);
      }
    });

    return (
      <Modal visible={true}>
        <div className={props.modalPrefixCls + '-header'}>
          <div className={props.modalPrefixCls + '-item'} onClick={this.onCancel}>取消</div>
          <div className={props.modalPrefixCls + '-item'}></div>
          <div className={props.modalPrefixCls + '-item'} onClick={this.onFinish}>确认</div>
        </div>
        <div className={props.modalPrefixCls + '-content'}>
          {pickers}
        </div>
      </Modal>
    );
  },
});
export default ListPicker;
