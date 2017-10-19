---
order: 0
title:
  zh-CN: 金额键盘
  en-US: Money input
---

## zh-CN

受控组件建议使用([rc-form ](https://github.com/react-component/form))

## en-US

Recommended use of [rc-form ](https://github.com/react-component/form) for controlled component.

````jsx
import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

class H5NumberInputExample extends React.Component {
  state = {
    type: 'money',
  }
  render() {
    const { getFieldProps } = this.props.form;
    const { type } = this.state;
    return (
      <div>
        <List>
          <InputItem
            {...getFieldProps('money3')}
            type={type}
            placeholder="start from left"
            clear
            moneyKeyboardAlign="left"
          >光标在左</InputItem>
          <InputItem
            type={type}
            placeholder="start from right"
            clear
            onChange={(v) => { console.log('onChange', v); }}
            onBlur={(v) => { console.log('onBlur', v); }}
          >光标在右</InputItem>
          <InputItem
            {...getFieldProps('money2', {
              normalize: (v, prev) => {
                if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                  if (v === '.') {
                    return '0.';
                  }
                  return prev;
                }
                return v;
              },
            })}
            type={type}
            placeholder="money format"
            ref={el => this.customFocusInst = el}
            clear
          >数字键盘</InputItem>
          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={() => this.customFocusInst.focus()}
            >
              click to focus
            </div>
          </List.Item>
        </List>
      </div>
    );
  }
}

const H5NumberInputExampleWrapper = createForm()(H5NumberInputExample);
ReactDOM.render(<H5NumberInputExampleWrapper />, mountNode);
````

````css
.demoTitle:before,
.demoTitle:after {
  border-bottom: none;
}
````
