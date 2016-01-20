# 基本

- order: 0

PageResult

---

````jsx
import {PageResult} from 'antm';
let PageResultExample = React.createClass({
  render() {
    return (
      <div className="button-container">
        <PageResult
          imgUrl="https://t.alipayobjects.com/images/rmsweb/T1sFNgXodiXXXXXXXX.png"
          title="报错文案"
          brief="报错说明"
          buttonTxt="再试一次"
          buttonClick={function(){}}
        />
      </div>
    );
  }
});

ReactDOM.render(<PageResultExample />, document.getElementById('components-page-result-demo-basic'));
````
