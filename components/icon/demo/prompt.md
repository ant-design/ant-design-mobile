---
order: 1
title: 提示建议性图标
---

````jsx
const icons = ['question', 'question-circle-o', 'question-circle', 'plus', 'plus-circle-o', 'plus-circle', 'pause', 'pause-circle-o', 'pause-circle', 'minus', 'minus-circle-o', 'minus-circle', 'plus-square', 'minus-square', 'info', 'info-circle-o', 'info-circle', 'exclamation', 'exclamation-circle-o', 'exclamation-circle', 'cross', 'cross-circle-o', 'cross-circle', 'check', 'check-circle-o', 'check-circle', 'clock-circle-o', 'clock-circle'];

import { Icon, Flex } from 'antd-mobile';

let IconExample = React.createClass({
  render() {
    return (<div style={{ paddingTop: 16 }}>
      <Flex wrap="wrap">
        {
          icons.map((item, index) => (
            <span key={index} style={{ width: 100, height: 60, fontSize: 24, textAlign: 'center' }}>
              <Icon type={item} />
            </span>
          ))
        }
      </Flex>
    </div>);
  },
});

ReactDOM.render(<IconExample />, mountNode);
````
