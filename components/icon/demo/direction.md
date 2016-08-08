---
order: 0
title: 方向性图标
---

````jsx
import { Icon, Flex } from 'antd-mobile';

const icons = ['step-backward', 'step-forward', 'fast-backward', 'fast-forward', 'shrink', 'arrow-salt', 'down', 'up', 'left', 'right', 'caret-down', 'caret-up', 'caret-left', 'caret-right', 'caret-circle-right', 'caret-circle-left', 'caret-circle-o-right', 'caret-circle-o-left', 'circle-right', 'circle-left', 'circle-o-right', 'circle-o-left', 'double-right', 'double-left', 'verticle-right', 'verticle-left', 'forward', 'backward', 'rollback', 'retweet', 'swap', 'swap-left', 'swap-right', 'arrow-right', 'arrow-up', 'arrow-down', 'arrow-left', 'play-circle', 'play-circle-o', 'circle-up', 'circle-down', 'circle-o-up', 'circle-o-down', 'caret-circle-o-up', 'caret-circle-o-down', 'caret-circle-up', 'caret-circle-down'];

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
