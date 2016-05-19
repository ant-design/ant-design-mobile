# AntD Mobile

## 环境

```
node = 4.x
```

## 代码风格

https://github.com/airbnb/javascript

### API 规范

设计原则

1. 尽量和 react-native 一致
2. react-native 没有的组件, 参考 antd
3. antd 也没有的, 发 issue 讨论


组件名以 `-` 分割, 例如 `date-picker`,文件后缀名统一为 `.js`


### web 组件规范

components/button/index.js

```js
import React from 'react';
class Button extends React.Component {
 static propTypes={};

 static defaultProps={};

 onClick = () => {
 };

 render() {
   return <a onClick={this.onClick}>;
 }
}
export default Button;
```

components/button/style/index.js

```js
import '../../style/';
import './index.less';
```

components/button/style/index.less

```less
@import '../../../style/variables';
@import '../../../style/mixins';
@buttonPrefixClass: am-button

@{buttonPrefixClass} {
  .button();
}
```

### react-native 组件规范

components/button/index.ios.js

```
import React, { View, StyleSheet } from 'react-native';

// 可独立到 components/button/style/index.ios.js
const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
});

class Button extends React.Component {
  render() {
    return (<View style={[styles.button]}>
      {this.props.children}
    </View>);
  }
}

export default Button;

```

components/button/index.android.js

```
module.exports = require('./index.ios');
```

components/button/demo/basic.js

```
import { Button } from 'antm';
import React, { AppRegistry, Text, View } from 'react-native';


class BasicButtonExample extends React.Component {
  render() {
    return <Button><Text>basic button</Text></Button>;
  }
}

AppRegistry.registerComponent('basic', () => BasicButtonExample);
```

## 开发流程

```
npm install tnpm@release-3 -g --registry=http://registry.npm.alibaba-inc.com
tnpm install`
```

### web 流程

```
npm start
```

测试单个组件使用 COMPONENT_STYLE 环境变量, 例如

```
COMPONENT_STYLE=button npm start
```

pc 版: http://localhost:8001/

mobile 版: http://localhost:8001/kitchen-sink.html

### react-native 流程


```
npm run rn-start
```

iphone 手机安装

http://gitlab.alibaba-inc.com/animajs-rn/RNPlayground/tree/master

使用 RNPlayground 扫码访问

```
http://ip:8081/components/button/demo/basic.bundle?platform=ios
```


### 提交代码

自己从 master 新开一个分支开发

```
git checkout -b xx-feature
```

开发完成后,

```
git add --all
git commit -am "描述"
git pull --rebase origin master
// 解决冲突
git push origin xx-feature:xx-feature
```

提交 mr, 指定相应人员 review, 根据反馈进一步修改提交.

由 review 人合并进主干后

```
git checkout master
git pull
```


更新自己主干结束本次需求开发。


## 发布流程

### 发布网站

```
git push origin master:deploy
```

代码推送到 deploy 分支即完成部署

### 发布

发布日志参考: http://www.atatech.org/articles/37414   http://www.atatech.org/articles/54610

发布日志先发到: http://gitlab.alibaba-inc.com/react-ui/ant-mobile/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=

大家 review 通过后, 再发到 http://www.atatech.org/articles/new/?group=1338

最后发个邮件, done!


```
npm run pub // 发布
```
