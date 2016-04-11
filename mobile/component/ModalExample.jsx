/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { Modal, List, CheckboxItem, Button, WhiteSpace, WingBlank } from '../../index.js';
import { createForm } from 'rc-form';

function noop(){}

let ModalExample = React.createClass({
  render(props) {
    return (
      <Page title="Modal" subtitle="&lt;Modal /&gt;">
        <List>
          <List.Header>列表头部,没有附带说明</List.Header>
          <List.Body>
            <ModalListItem form={this.props.form} />
          </List.Body>
          <List.Footer>列表尾部</List.Footer>
        </List>
      </Page>
    );
  }
});
ModalExample = createForm()(ModalExample);

let ModalListItem = React.createClass({
  render(){
    const { getFieldProps } = this.props.form;
    return (
      <ListSelector data={
            [{
              name:'浙江',
              id:'zj'
            }, {
              name:'上海',
              id:'sh'
            }, {
              name:'名字很长很长很长的',
              id:'shaa'
            }]
          }
        {...getFieldProps('region', {
          initialValue:{
            zj:true
          }
        })}
      >
        <List.Item extra="请选择" arrow="horizontal">所在地区</List.Item>
      </ListSelector>
    );
  }
});

let ListSelector = React.createClass({
  getInitialState(){
    return { open :false };
  },
  getDefaultProps(){
    return {
      data  : [],
      value : {},
      onChange:noop
    };
  },
  componentDidMount(){},
  onFinish() {
    this.props.onSelect(this.props.form.getFieldsValue());
  },
  componentWillUnmount(){},
  openModal(){
    this.setState({ open: true });
  },
  willReceiveProps(nextProps){
    console.log(nextProps);
  },
  confirmSelector(){
    let value = this.props.form.getFieldsValue();
    console.log('field value');
    console.log(value);

    this.props.onChange(value);
    this.setState({ open: false });
  },
  render(){
    // console.log(this.props.value);
    const inArray = function(arr, item){
      let result = false;
      arr.forEach((i) => {
        if(i === item) result = true;
      });
      return result;
    };

    const { getFieldProps } = this.props.form;

    const selectedKey = [];
    const selectedItemNames = [];
    this.props.data.forEach((d) => {
      if(this.props.value[d.id]){
        selectedItemNames.push(d.name);
        selectedKey.push(d.id);
      }
    });

    const renderData = this.props.data.map((data) => {
      if(inArray(selectedKey, data.id)){
        data.checked = true;
      } else{
        data.checked = false;
      }
      return data;
    });

    let items = renderData.map((data) => {
      return (
        <CheckboxItem
          {...getFieldProps(data.id, {
            valuePropName:'checked',
            initialValue: data.checked
          })}
          key={'selector_' + data.id}
        >{data.name}</CheckboxItem>
      );
    });

    const openEl = (
      <Modal show={true}>
        <List>
          <List.Body>
            {items}
          </List.Body>
        </List>
        <WhiteSpace/>
        <WingBlank>
          <Button onClick={this.confirmSelector}>确定</Button>
        </WingBlank>
      </Modal>
    );

    const extraProps = {
      onClick: this.openModal,
    };
    if(selectedItemNames.length){
      extraProps.extra = selectedItemNames.join(',');
    }
    const closeEl = React.cloneElement(this.props.children, extraProps);
    return this.state.open ? openEl : closeEl;
  }
});
ListSelector = createForm()(ListSelector);

export default ModalExample;
