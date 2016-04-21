---
order: 0
title: 基本
---

列表主体内容的容器。

---

````jsx
import { List, TextareaItem } from 'antm';
import { createForm } from 'rc-form';

let TextareaItemExample = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List>
          <List.Body>
            <TextareaItem
              {...getFieldProps('note', {
                initialValue: 'dada22东方朔放松放松东方朔放松放松冯绍峰放松放松放松放松放松放松放松放松',
                valuePropName: 'value'
              })}
              label="备注说明"
              name="yyy"
              rows={5}
              placeholder="带清除"
              clear
              onBlur={() => {console.log('onBlur'); }}
              onFocus={(e) => {console.log('onFocus'); console.log(e);}}
            />
            <TextareaItem
              {...getFieldProps('note2', {
                initialValue: '',
                valuePropName: 'value'
              })}
              label="备注说明"
              name="yyy"
              placeholder="请填写"
              clear={false}
              rows={5}
              maxLength={100}
              onBlur={() => {console.log('onBlur');}}
              onFocus={(e) => {console.log('onFocus'); console.log(e);}}
            />
            <TextareaItem
              {...getFieldProps('note3', {
                initialValue: '',
                valuePropName: 'value'
              })}
              label="高度自适应"
              error
              autoHeight
              maxLength={30}
              clear
              placeholder="高度自适应+最大长度"
            />
            <TextareaItem
              {...getFieldProps('note4', {
                initialValue: '',
                valuePropName: 'value'
              })}
              label="备注说明"
              clear
              error
              placeholder="请填写"
            />
            <TextareaItem
              {...getFieldProps('note5', {
                initialValue: '不可编辑',
                valuePropName: 'value'
              })}
              label="备注说明"
              clear
              error
              placeholder="不可编辑"
              editable={false}
            />
          </List.Body>
        </List>
      </div>
    );
  }
});

TextareaItemExample = createForm()(TextareaItemExample);

ReactDOM.render(<TextareaItemExample />, document.getElementById('components-textarea-item-demo-basic'));
````
