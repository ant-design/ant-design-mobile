---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

受控组件建议使用([rc-form ](https://github.com/react-component/form))

## en-US

Recommended use of [rc-form ](https://github.com/react-component/form) for controlled component.

````jsx
import { List, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';

class TextareaItemExample extends React.Component {
  componentDidMount() {
    this.autoFocusInst.focus();
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List renderHeader={() => 'Customize to focus'}>
          <TextareaItem
            title="标题"
            placeholder="auto focus in Alipay client"
            data-seed="logId"
            ref={el => this.autoFocusInst = el}
            autoHeight
          />
          <TextareaItem
            title="标题"
            placeholder="click the button below to focus"
            data-seed="logId"
            autoHeight
            ref={el => this.customFocusInst = el}
          />
          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={() => this.customFocusInst.focus()}
            >
              click to focus
            </div>
          </List.Item>
        </List>
        <List renderHeader={() => 'Whether is controlled'}>
          <TextareaItem
            {...getFieldProps('control')}
            title="受控组件"
            placeholder="controlled"
          />
          <TextareaItem
            title="非受控组件"
            placeholder="please input content"
            clear
          />
        </List>
        <List renderHeader={() => 'Auto / Fixed height'}>
          <TextareaItem
            {...getFieldProps('note3')}
            title="高度自适应"
            autoHeight
            labelNumber={5}
          />
          <TextareaItem
            {...getFieldProps('note1')}
            rows={3}
            placeholder="fixed number of lines"
          />
        </List>
        <List renderHeader={() => 'Show clear'}>
          <TextareaItem
            {...getFieldProps('clear1')}
            clear
            title="标题"
            placeholder="displayed clear while typing"
          />
        </List>
        <List renderHeader={() => 'Custom title（text / image / empty）'}>
          <TextareaItem
            {...getFieldProps('title3')}
            title={<img src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" style={{ width: '28px', height: '28px' }} alt="" />}
            placeholder="title can be customized"
          />
        </List>
        <List renderHeader={() => 'Limited value length'}>
          <TextareaItem
            {...getFieldProps('note4')}
            placeholder="can enter up to 10 characters"
            count={10}
          />
        </List>
        <List renderHeader={() => 'Count'}>
          <TextareaItem
            {...getFieldProps('count', {
              initialValue: '计数功能,我的意见是...',
            })}
            rows={5}
            count={100}
          />
        </List>
        <List renderHeader={() => 'Not editable / Disabled'}>
          <TextareaItem
            {...getFieldProps('note6', {
              initialValue: 'not editable',
            })}
            title="姓名"
            editable={false}
          />
          <TextareaItem
            value="disabled style"
            title="姓名"
            disabled
          />
        </List>
      </div>
    );
  }
}

const TextareaItemExampleWrapper = createForm()(TextareaItemExample);

ReactDOM.render(<TextareaItemExampleWrapper />, mountNode);
````


````css
.demoTitle:before,
.demoTitle:after {
  border-bottom: none;
}
````
