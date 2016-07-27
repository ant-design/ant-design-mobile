---
order: 0
title: 基本
---

列表主体内容的容器。

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
        <List>
          <List.Header>多行输入,TextareaItem</List.Header>
          <List.Body>
            <TextareaItem
              {...getFieldProps('note', {
                initialValue: '',
                valuePropName: 'value',
              })}
              name="yyy"
              placeholder="如果你有什么建议意见，欢迎你来吐槽"
              clear
              onBlur={() => { console.log('onBlur'); }}
              onFocus={(e) => { console.log('onFocus'); console.log(e); }}
            />
            <TextareaItem
              {...getFieldProps('note3', {
                initialValue: '',
                valuePropName: 'value',
              })}
              name="yyy"
              rows={3}
              placeholder="固定行数,rows"
              clear
              onBlur={() => { console.log('onBlur'); }}
              onFocus={(e) => { console.log('onFocus'); console.log(e); }}
            />
            <TextareaItem
              {...getFieldProps('note1', {
                initialValue: '',
                valuePropName: 'value',
              })}
              title="带标题"
              labelNumber={4}
              name="yyy"
              placeholder="title"
              clear={false}
              onBlur={() => { console.log('onBlur'); }}
              onFocus={(e) => { console.log('onFocus'); console.log(e); }}
            />
            <TextareaItem
              {...getFieldProps('note2', {
                initialValue: '',
                valuePropName: 'value',
              })}
              title="自适应"
              labelNumber={4}
              autoHeight
              clear
              placeholder="高度自适应"
            />
            <TextareaItem
              {...getFieldProps('note4', {
                initialValue: '',
                valuePropName: 'value',
              })}
              title="最大长度"
              labelNumber={4}
              count={30}
              clear
              error
              placeholder="count"
            />
            <TextareaItem
              {...getFieldProps('note5', {
                initialValue: '',
                valuePropName: 'value',
              })}
              title={<img src="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png" width="28" height="28" />}
              labelNumber={4}
              clear
              placeholder="title类型可以是node"
            />
            <TextareaItem
              {...getFieldProps('note6', {
                initialValue: '不可编辑',
                valuePropName: 'value',
              })}
              title="不可编辑"
              labelNumber={4}
              placeholder="editable"
              editable={false}
            />
            <TextareaItem
              {...getFieldProps('note7', {
                initialValue: '多行输入,带计数功能,count+rows',
                valuePropName: 'value',
              })}
              title="备注说明"
              labelNumber={4}
              name="yyy"
              rows={5}
              placeholder="计数功能"
              clear
              count={100}
              onBlur={() => { console.log('onBlur'); }}
              onFocus={(e) => { console.log('onFocus'); console.log(e); }}
            />
            <TextareaItem
              {...getFieldProps('note8', {
                initialValue: '多行输入,带计数功能,count+rows',
                valuePropName: 'value',
              })}
              title="备注说明"
              labelNumber={4}
              name="yyy"
              rows={5}
              placeholder="计数功能"
              clear
              error
              onErrorClick={() => { alert(21212); }}
              count={100}
              onBlur={() => { console.log('onBlur'); }}
              onFocus={(e) => { console.log('onFocus'); console.log(e); }}
            />
          </List.Body>
        </List>
      </div>
    );
  },
});

TextareaItemExample = createForm()(TextareaItemExample);

ReactDOM.render(<TextareaItemExample />, mountNode);
