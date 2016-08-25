---
order: 0
title: 基本
---

列表主体内容的容器。

[rc-form API](https://github.com/react-component/form)

````jsx
import { List, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';

let TextareaItemExample = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List title="多行输入">
          <List.Body>
            <TextareaItem
              title="非受控"
              defaultValue="非受控组件"
              placeholder="非受控组件"
            />
            <TextareaItem
              title="受控组件"
              value=""
              placeholder="如果你有什么建议意见，欢迎你来吐槽"
              clear
            />
            <TextareaItem
              {...getFieldProps('note1', {
                initialValue: '',
              })}
              rows={3}
              placeholder="固定行数,rows"
              clear
              onBlur={() => { console.log('onBlur'); }}
              onFocus={(value) => { console.log('onFocus'); console.log(value); }}
            />
            <TextareaItem
              {...getFieldProps('note2', {
                initialValue: '',
              })}
              title="带标题"
              placeholder="title"
              clear={false}
              onBlur={() => { console.log('onBlur'); }}
              onFocus={(value) => { console.log('onFocus'); console.log(value); }}
            />
            <TextareaItem
              {...getFieldProps('note3', {
                initialValue: '',
              })}
              title="自适应"
              autoHeight
              clear
              placeholder="autoHeight"
            />
            <TextareaItem
              {...getFieldProps('note4', {
                initialValue: '',
              })}
              title="最大长度"
              count={30}
              clear
              placeholder="count"
            />
            <TextareaItem
              {...getFieldProps('note5', {
                initialValue: '',
              })}
              title={<img src="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png" style={{ width: '0.56rem', height: '0.56rem' }} />}
              clear
              placeholder="title类型可以是node"
            />
            <TextareaItem
              {...getFieldProps('note6', {
                initialValue: '不可编辑',
              })}
              title="不可编辑"
              placeholder="editable"
              editable={false}
            />
            <TextareaItem
              value="禁用状态"
              title="禁用状态"
              disabled
              placeholder="editable"
              editable={false}
            />
            <TextareaItem
              {...getFieldProps('note7', {
                initialValue: '多行输入,带计数功能,count+rows',
              })}
              title="备注说明"
              rows={5}
              placeholder="计数功能"
              clear
              count={100}
              onBlur={() => { console.log('onBlur'); }}
              onFocus={(value) => { console.log('onFocus'); console.log(value); }}
            />
            <TextareaItem
              {...getFieldProps('note8', {
                initialValue: '多行输入,带计数功能,count+rows',
              })}
              title="报错样式"
              rows={5}
              placeholder="计数功能"
              clear
              error
              onErrorClick={() => { alert('点击报错'); }}
              count={100}
              onBlur={() => { console.log('onBlur'); }}
              onFocus={(value) => { console.log('onFocus'); console.log(value); }}
            />
          </List.Body>
        </List>
      </div>
    );
  },
});

TextareaItemExample = createForm()(TextareaItemExample);

ReactDOM.render(<TextareaItemExample />, mountNode);
