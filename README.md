# AntD Mobile

## 环境

```
node = 4.x
```

## 代码风格

https://github.com/airbnb/javascript

### 组件规范

components/button/index.jsx

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

## 开发流程

```
npm install tnpm@release-3 -g --registry=http://registry.npm.alibaba-inc.com
tnpm install
npm start
```

pc 版: http://localhost:8001/

mobile 版: http://localhost:8001/kitchen-sink.html

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