# 基本

- order: 0

---

````jsx
import { SearchBar } from 'antm';
let SearchBarExample = React.createClass({
  render() {
    return (
      <div>
        <SearchBar
          value=""
          placeholder="搜索"
          onSubmit={(value) => {console.log('onSubmit' + value);}}
          onChange={(value) => {console.log(value);}}
          onClear={(value) => {console.log('onClear');}}
          onCancel={(value) => {console.log('onCancel');}}
          onFocus={(value) => {console.log('onFocus');}}
          onBlur={(value) => {console.log('onBlur');}}
        />
        <SearchBar
          value="蚂蚁中台"
          placeholder="搜索"
          onSubmit={(value) => {console.log('onSubmit' + value);}}
          onChange={(value) => {console.log(value);}}
          onClear={(value) => {console.log('onClear');}}
          onCancel={(value) => {console.log('onCancel');}}
        />
        <SearchBar
          value=""
          placeholder="取消按钮总是显示"
          onSubmit={(value) => {console.log('onSubmit' + value);}}
          onChange={(value) => {console.log(value);}}
          onClear={(value) => {console.log('onClear');}}
          onCancel={(value) => {console.log('onCancel');}}
          showCancelButton={true}
        />
        <SearchBar placeholder="搜索框被禁用" disablSearch={true}/>
    </div>
    );
  }
});

ReactDOM.render(<SearchBarExample />, document.getElementById('components-search-bar-demo-basic'));
````
