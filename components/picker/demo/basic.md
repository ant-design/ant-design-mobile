---
order: 0
title: 基本
---

数据级联选择示例. ([rc-form 文档](https://github.com/react-component/form))

````jsx
import { Picker, List, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

import { district, provinceLite as province } from 'antd-mobile-demo-data';

// 如果不是使用 List.Item 作为 children
const CustomChildren = (props) => (
  <div
    onClick={props.onClick}
    style={{ backgroundColor: '#fff', padding: '0 0.3rem' }}
  >
    <span style={{ display: 'inline-block', width: '40%' }}>{props.children}</span>
    <span style={{ height: '0.9rem', lineHeight: '0.9rem', float: 'right' }}>{props.extra}</span>
  </div>
);

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];

let Test = React.createClass({
  getInitialState() {
    return {
      data: [],
      cols: 1,
      pickerValue: [],
      sValue: ['2013', '春'],
    };
  },
  onClick() {
    setTimeout(() => {
      this.setState({
        data: province,
      });
    }, 120);
  },
  onPickerChange(val) {
    console.log(val);
    let colNum = 1;
    const d = [...this.state.data];
    if (val[0] === 'zj') {
      d.forEach(i => {
        if (i.value === 'zj') {
          colNum = 2;
          if (!i.children) {
            i.children = [{
              value: 'zj-nb',
              label: '宁波',
            }, {
              value: 'zj-hz',
              label: '杭州',
            }];
          } else if (val[1] === 'zj-hz') {
            i.children.forEach(j => {
              if (j.value === 'zj-hz') {
                j.children = [{
                  value: 'zj-hz-xh',
                  label: '西湖区',
                }];
              }
            });
            colNum = 3;
          }
        }
      });
    } else {
      colNum = 1;
    }
    this.setState({
      data: d,
      cols: colNum,
    });
  },
  // setVal() {
  //   this.props.form.setFieldsValue({
  //     district: ['340000', '340800', '340822'],
  //   });
  // },
  render() {
    const { getFieldProps } = this.props.form;
    return (<div>
      <WhiteSpace size="lg" />
      <List style={{ backgroundColor: 'white' }} className="picker-list">
        <Picker extra="请选择(可选)" data={district} title="选择地区" {...getFieldProps('district', {
          initialValue: ['340000', '341500', '341502'],
        })}
        >
          <List.Item arrow="horizontal">省市区选择</List.Item>
        </Picker>
        <Picker
          data={this.state.data}
          cols={this.state.cols}
          {...getFieldProps('district2')}
          onPickerChange={this.onPickerChange}
        >
          <List.Item arrow="horizontal" onClick={this.onClick}>省市选择(异步加载)</List.Item>
        </Picker>
        <Picker data={district} cols={1} {...getFieldProps('district3')} className="forss">
          <List.Item arrow="horizontal">选择省份</List.Item>
        </Picker>
      </List>

      <WhiteSpace size="lg" />
      <Picker
        data={district}
        title="选择地区"
        extra="请选择(可选)"
        value={this.state.pickerValue}
        onChange={(v) => this.setState({ pickerValue: v })}
      >
        <CustomChildren>省市区选择(自定义 children)</CustomChildren>
      </Picker>

      <WhiteSpace size="lg" />
      <Picker
        data={seasons}
        title="选择季节"
        cascade={false}
        extra="请选择(可选)"
        value={this.state.sValue}
        onChange={(v) => this.setState({ sValue: v })}
      >
        <List.Item arrow="horizontal">选择季节</List.Item>
      </Picker>
    </div>);
  },
});

Test = createForm()(Test);

ReactDOM.render(<Test />, mountNode);
````
````css
.picker-list .am-list-item .am-list-line .am-list-extra {
  flex-basis: initial;
}
````
