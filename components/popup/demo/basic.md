---
order: 0
title: 向下弹出效果
---

Popup 向下弹出效果

````jsx
import { Popup, List, Button } from 'antd-mobile';

// const SelectorDataForPopup = [
//   {
//     label: '中餐',
//     value: '21',
//   }, {
//     label: '还没生效',
//     value: '22',
//     disabled: true,
//   }, {
//     label: '关闭浮层',
//     value: 'qx',
//   }, {
//     label: '自助餐',
//     value: '24',
//   }, {
//     label: '快餐',
//     value: '25',
//   }, {
//     label: '小吃',
//     value: '26',
//   },
// ];

const Test = React.createClass({
  getInitialState() {
    return {
      sel: '',
    };
  },
  onClick(e) {
    e.preventDefault(); // 修复 Android 上点击穿透
    Popup.show(
      <List
        renderHeader={() => '账户总览 (已绑定3个）'}
      >
        <List.Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          onClick={() => { this.onClose('cancel'); }}
        >东吴证券 (5728）</List.Item>
        <List.Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          onClick={() => { this.onClose('cancel'); }}
        >东吴证券 (5728）</List.Item>
        <List.Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          arrow="horizontal"
          onClick={() => { this.onClose('opt 1'); }}
        >更多</List.Item>
      </List>,
    { onMaskClose: this.onMaskClose });
  },
  onMaskClose() {
    console.log('onMaskClose');
    // also support Promise
    // return new Promise((resolve) => {
    //   console.log('1000ms 后关闭');
    //   setTimeout(resolve, 1000);
    // });
  },
  onClose(sel) {
    // if (sel === 'opt 1') {
    //   // 演示再弹出内容
    //   this.newInstance();
    //   return;
    // }
    this.setState({ sel });
    Popup.hide();
  },
  // newInstance() {
  //   const ins = Popup.newInstance();
  //   const hide = (value) => {
  //     if (value[0] === 'qx') {
  //       ins.hide();
  //     }
  //   };
  //   ins.show(<Menu
  //     level={1}
  //     value={[SelectorDataForPopup[0]]}
  //     data={SelectorDataForPopup}
  //     onChange={hide}
  //   />, { maskClosable: true });
  // },
  render() {
    return (<div style={{ padding: '0.15rem' }}>
      <Button onClick={this.onClick}>显示</Button>
    </div>);
  },
});

ReactDOM.render(<Test />, mountNode);
````
