# 基本

- order: 0

---

````jsx
import { SearchBar } from 'antm';
let SearchBarExample = React.createClass({
  render() {
    return (
      <div>
        <div>
          <SearchBar
            value="1111"
            placeholder="搜索"
            onSubmit={function(value){console.log('onSubmit' + value);}}
            onChange={function(value){console.log(value);}}
            onClear={function(value){console.log('onClear');}}
            onCancel={function(value){console.log('onCancel');}}
          />
          <SearchBar
            value=""
            placeholder="搜索1"
            onSubmit={function(value){console.log('onSubmit' + value);}}
            onChange={function(value){console.log(value);}}
            onClear={function(value){console.log('onClear');}}
            onCancel={function(value){console.log('onCancel');}}
            showCancelButton={true}
          />
          <SearchBar
            placeholder="搜索输入框被禁用"
            disablSearch={true}
          />
        </div>
        <div className="am-flexbox">
          <section className="am-flexbox-item">
          <SearchBar
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

ReactDOM.render(<SearchBarExample />, document.getElementById('components-search-bar-demo-basic'));
````
