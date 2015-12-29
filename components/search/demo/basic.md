# 基本

- order: 0

---

````jsx
import {Search} from 'antm';
let SearchExample = React.createClass({
  render() {
    return (
      <div>
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
            showCancelButton={true}
          />
          <Search
            placeholder="搜索输入框被禁用"
            disablSearch={true}
          />
        </div>
        <div className="am-flexbox">
          <section className="am-flexbox-item">
          <Search
            value=""
            placeholder="搜索"
            onSubmit={function(value){console.log('onSubmit' + value);}}
            onChange={function(value){console.log(value);}}
            onClear={function(value){console.log('onClear');}}
            onCancel={function(value){console.log('onCancel');}}
            onFocus={function(value){console.log('onFocus');}}
            onBlur={function(value){console.log('onBlur');}}
          />
          </section>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<SearchExample />, document.getElementById('components-search-demo-basic'));
````
