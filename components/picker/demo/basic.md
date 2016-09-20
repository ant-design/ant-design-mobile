---
order: 0
title: 基本
---

数据级联选择示例. ([rc-form 文档](https://github.com/react-component/form))

````jsx
import { Picker, List } from 'antd-mobile';

import district from 'site/data/district';
import { createForm } from 'rc-form';

let Test = React.createClass({
  getInitialState() {
    return {
      data: [],
    };
  },
  onClick() {
    console.log('start loading data');
    setTimeout(() => {
      this.setState({
        data: district,
      });
    }, 500);
  },
  setVal() {
    this.props.form.setFieldsValue({
      district: ['340000', '340800', '340822'],
    });
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (<div>
      <List renderHeader={() => '联动选择'} style={{ backgroundColor: 'white' }}>
        <Picker extra="请选择(可选)" data={district} title="选择地区" {...getFieldProps('district', {
          initialValue: ['340000', '340800', '340824'],
        })}>
          <List.Item arrow="horizontal">省市区选择</List.Item>
        </Picker>
        <Picker data={this.state.data} cols={2} {...getFieldProps('district2')}>
          <List.Item arrow="horizontal" onClick={this.onClick}>省市选择(异步加载)</List.Item>
        </Picker>
        <Picker data={district} cols={1} {...getFieldProps('district3')} className="forss">
          <List.Item arrow="horizontal">选择省份</List.Item>
        </Picker>
        {/* <List.Item><Button inline size="small" onClick={this.setVal}>手动设置省市区</Button></List.Item> */}
      </List>
    </div>);
  },
});

Test = createForm()(Test);

ReactDOM.render(<Test />, mountNode);
````
