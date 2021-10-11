# 从 v2 迁移

v5 是完全重写的一个版本，所以 v2 和 v5 的差异非常之大，其实不存在所谓的"迁移"，基本是替换为一套全新的组件。

为了降低迁移成本和难度，你可以通过下面提到的一些方法来实现 v2 和 v5 两个版本的共存：

### 方法一：使用 antd-mobile-v2

我们为 v2 发布了一个单独的影子 npm 包：`antd-mobile-v2`，你可以先将原来项目中 v2 版本的 antd-mobile 替换为这个包。

先安装 `antd-mobile-v2`：

```bash
$ npm install --save antd-mobile-v2
# or
$ yarn add antd-mobile-v2
```

然后把项目中所有对 `antd-mobile` 的引入都替换为 `antd-mobile-v2`，例如：

```jsx
import {Button} from 'antd-mobile'
// ⬇️
import {Button} from 'antd-mobile-v2'
```

接下来，移除原有的 `antd-mobile` 依赖，运行（测试、构建）你的项目，确认一下是否一切是正常的。

最后，重新安装 `antd-mobile` 为 v5 版本：

```bash
$ npm install --save antd-mobile@next
# or
$ yarn add antd-mobile@next
```

现在，你项目中的 `antd-mobile` 是 v5 版本，`antd-mobile-v2` 是 v2 版本。

### 方法二：通过别名安装 v5

我们更推荐你使用方法一进行迁移，它虽然需要一点点前期一次性的改造，但是却可以让整体的迁移成本更低，同时让后续的迁移更加平滑简单。

当然，如果你的项目环境无法使用这种迁移方式，我们也为你提供了备选方案。

你可以通过别名的方式来安装 antd-mobile v5，同时保留 v2 版本：

```bash
$ npm install --save antd-mobile-v5@npm:antd-mobile@next
# or
$ yarn add antd-mobile-v5@npm:antd-mobile@next
```

对应的 package.json 为：

```json
{
  "antd-mobile": "^2.3.2",
  "antd-mobile-v5": "npm:antd-mobile@next"
}
```

现在，你项目中的 `antd-mobile` 还是 v2 版本，`antd-mobile-v5` 是 v5 版本。

```js
import { Button } from 'antd-mobile' // v2
import { Button } from 'antd-mobile-v5' // v5
```

需要注意的是，npm 别名并不是所有的包管理器都有很好的支持。
