import 'rmc-picker/assets/index.css';
import 'rmc-modal/assets/index.css';
import 'rmc-modal/assets/simple.css';
import ReactDOM from 'react-dom';
import Picker from 'rmc-picker';
import Modal from 'rmc-modal';
import React, {PropTypes} from 'react';

function noop(){}

//i c n -> id, children, name
function convertData(arr){
  return arr.map((item)=>{
    if(item.c){
      item.children = convertData(item.c);
    }
    return {
      name     : item.name || item.n,
      value    : item.value || item.i,
      children : item.children || item.c
    }
  });
}

const ListPicker = React.createClass({
  propTypes: {
    selected : React.PropTypes.array,
    colcount : React.PropTypes.number,
    onChange : PropTypes.func   
  },
  getDefaultProps() {
    return {
      prefixCls     : 'rmc-picker',
      modalPrefixCls: 'rmc-modal',
      value         : [], //["110000", "110100", "110114"],
      srcData       : [],
      onChange      : noop,
      colcount      : 3
    };
  },
  getInitialState() {
    return {
      modalVisible       : false,
      value              : this.props.value,
      selectedName       : [],
      collectionToRender : [],
      data               : []
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
  componentDidMount(){
    const collectResult = [];
    const selectedResult = this.state.value;

    //markup default value 
    const ifNeedInitSelectValue = !this.state.value.length;
    let data = convertData(this.props.srcData);

    if(ifNeedInitSelectValue){
      let currentCollectionA = data;
      for(let i = 0; i < this.props.colcount ; i++){         
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
    
    this.setState(newState);
  },
  onDismiss() {
    this.setVisibleState(false);
  },
  onFinish() {
    this.setVisibleState(false);
    
    // findItemByValue
    // debugger
    this.state.value.forEach((item)=>{
      
    });
    console.log(this.findItemByValue(this.state.data,this.state.value[0]));
    
    this.props.onChange(this.state.value);
  },
  onValueChange(index,item) {     
    const currentRender = this.state.collectionToRender;
    
    let nextRender = currentRender;     
    let levelData  = convertData(item.children);
    let levelIndex = index + 1;
    let value      = this.state.value;
    
    value[index] = item.value;
        
    while(levelIndex <= currentRender.length - 1){
      nextRender[levelIndex] = levelData || [];
      value[levelIndex]   = levelData.length ? levelData[0].value : null;
      levelData = nextRender[levelIndex].length ? nextRender[levelIndex][0].children : [];
      ++levelIndex;
    }

    this.setState({
      collectionToRender : nextRender,
      value              : value
    });

  },
  setVisibleState(visible) {
    this.setState({
      modalVisible: visible,
    });
  },
  render() {
    const props = this.props;
    const st = this.state;
    
    const pickers = [];
    for(let i = 0 ; i < this.state.collectionToRender.length ; i++ ){
      let collectionItem = this.state.collectionToRender[i];
      pickers.push(         
        <div key={"item" + i} className={`${props.modalPrefixCls}-item`}>
          <Picker data={collectionItem} selectedValue={this.state.value[i]} onValueChange={this.onValueChange.bind(this, i)} />
        </div>
      );
    }

    const extraProps ={
      onClick : this.setVisibleState.bind(this,true)
    }
    const childEl = React.cloneElement(this.props.children, extraProps);     

    return (
      <div>
        <Modal visible={this.state.modalVisible} onDismiss={this.onDismiss}>
          <div className={props.modalPrefixCls + '-header'}>
            <div className={props.modalPrefixCls + '-item'} onClick={this.setVisibleState.bind(this, false)}>取消</div>
            <div className={props.modalPrefixCls + '-item'}></div>
            <div className={props.modalPrefixCls + '-item'} onClick={this.onFinish}>确认</div>
          </div>
          <div className={props.modalPrefixCls + '-content'}>
            {pickers}
          </div>
        </Modal>
        {childEl}
      </div>
    );
  },
});

export default ListPicker;