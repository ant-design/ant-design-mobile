---
order: 0
title:
  zh-CN: 金额键盘
  en-US: MoneyInput
---

## zh-CN

受控组件建议使用([rc-form ](https://github.com/react-component/form))

## en-US

Recommended use of [rc-form ](https://github.com/react-component/form) for controlled component.

````jsx
import { List, InputItem, Button } from 'antd-mobile';
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
        <List renderHeader={() => 'Format'}>
          <InputItem
            {...getFieldProps('money', {
              initialValue: '222',
            })}
            type={type}
            placeholder="money keyboard"
            clear
            maxLength={10}
            locale={{ confirmLabel: '计算' }}
            onBlur={value => console.log(value)}
          />
          <InputItem placeholder="22">普通键盘</InputItem>
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
          <InputItem
            {...getFieldProps('moneynatural', {
              normalize: (v) => {
                if (v && (v.charAt(0) === '0' || v.indexOf('.') >= 0)) {
                  return v.replace(/^0*(\d*).*$/, '$1');
                }
                return v;
              },
            })}
            type={type}
            placeholder="money format natural"
            clear
          >正整数</InputItem>
          <InputItem
            {...getFieldProps('money4')}
            type={type}
            placeholder="start from left"
            clear
            moneyKeyboardAlign="left"
          >光标在左</InputItem>
        </List>
        <Button
          onClick={() => {
            this.setState({
              type: 'text',
            });
          }}
        >
          重置为电话类型
        </Button>
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
