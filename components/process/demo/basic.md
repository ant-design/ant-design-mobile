# 基本

- order: 0

---

````jsx
import { Process, WhiteSpace } from 'antm';

const result = [
  {
    type: 'done',
    title: '成功转入 100.00 元',
    brief: '今天'
  },
  {
    type: 'done',
    title: '01-27 星期三',
    brief: '开始计算收益'
  },
  {
    type: 'pending',
    title: '发放收益'
  }
];

const result1 = [
  {
    type: 'done',
    title: '成功转入 100.00 元',
    brief: '今天'
  },
  {
    type: 'pending',
    title: '01-27 星期三',
    brief: '开始计算收益'
  },
  {
    type: 'fail',
    title: '转入失败'
  }
];

const result2 = [
  {
    type: 'done',
    title: '成功转入 100.00 元',
    brief: '今天'
  },
  {
    type: 'done',
    title: '01-27 星期三',
    brief: '开始计算收益'
  },
  {
    type: 'done',
    title: '01-28 星期四',
    brief: '收益到账'
  }
];

const result3 = [
  {
    type: 'done',
    title: '成功转入 100.00 元',
    brief: '今天'
  },
  {
    type: 'pending_alipay',
    title: '01-27 星期三',
    brief: '开始计算收益'
  },
  {
    type: 'pending_alipay',
    title: '01-28 星期四',
    brief: '收益到账'
  }
];

const result4 = [
  {
    type: 'done_alipay',
    title: '支付成功',
    brief: '手机号码：18698562380'
  },
  {
    type: 'pending_alipay',
    title: '预计10分钟内到账'
  }
];

const result5 = [
  {
    icon: 'https://os.alipayobjects.com/rmsportal/TMrttaVzdrUmfts.png',
    title: '指定icon',
    brief: 'icon 50x50'
  },
  {
    icon: 'https://os.alipayobjects.com/rmsportal/rZpLtoYsDtPrKAX.png',
    title: '预计10分钟内到账',
    brief: 'icon 50x50'
  },
  {
    icon: 'https://os.alipayobjects.com/rmsportal/huyBDwmKjViVAVw.png',
    title: '预计10分钟内到账',
    brief: 'icon 50x50'
  }
];

let ProcessExample = React.createClass({
  render() {
    return (
      <div>
        <Process result={result}/>
        <WhiteSpace mode={20}/>
        <Process result={result1}/>
        <WhiteSpace mode={20}/>
        <Process result={result2}/>
        <WhiteSpace mode={20}/>
        <Process result={result3}/>
        <WhiteSpace mode={20}/>
        <Process result={result4}/>
        <WhiteSpace mode={20}/>
        <Process result={result5}/>
      </div>
    );
  }
});

ReactDOM.render(<ProcessExample />, document.getElementById('components-process-demo-basic'));
````
