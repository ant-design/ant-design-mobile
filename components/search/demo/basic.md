# 基本

- order: 0

Tab，`line`默认为1。

---

````jsx
import {Search} from 'antm';
let SearchExample = React.createClass({
  render() {
    return (
    <div>
      <Search
        value="1111"
        placeholder="搜索"
        onSubmit={function(value){console.log('onSubmit' + value);}}
        onChange={function(value){console.log(value);}}
        onClear={function(value){console.log('onClear');}}
        onCancel={function(value){console.log('onCancel');}}
      />
      <Search
        value=""
        placeholder="搜索1"
        onSubmit={function(value){console.log('onSubmit' + value);}}
        onChange={function(value){console.log(value);}}
        onClear={function(value){console.log('onClear');}}
        onCancel={function(value){console.log('onCancel');}}
      />
    </div>
    );
  }
});

ReactDOM.render(<SearchExample />, document.getElementById('components-search-demo-basic'));
````
