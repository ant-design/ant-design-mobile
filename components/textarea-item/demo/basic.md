# 基本

- order: 0

列表主体内容的容器。

---

````jsx
import { ListWrap, ListBody, TextareaItem} from 'antm';

ReactDOM.render(
  <div>
  <ListWrap>
    <ListBody>
      <TextareaItem
        label="我是"
        name="yyy"
        defaultValue="dada22东方朔放松放松东方朔放松放松冯绍峰放松放松放松放松放松放松放松放松\n放松放松方式"
        placeholder="带清除"
        clear={true}
        onChange={function(e){console.log('onChange'); console.log(e);}}
        onBlur={function(e){console.log('onBlur'); console.log(e);}}
        onFocus={function(e){console.log('onFocus'); console.log(e);}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <TextareaItem
        label="我是"
        name="yyy"
        defaultValue="dada22东方朔放松放松东方朔放松放松冯绍峰放松放松放松放松放松放松放松放松\n放松放松方式"
        placeholder="不带清除"
        clear={false}
        onChange={function(e){console.log('onChange'); console.log(e);}}
        onBlur={function(e){console.log('onBlur'); console.log(e);}}
        onFocus={function(e){console.log('onFocus'); console.log(e);}}
        didMount={function(){}}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
    </ListBody>
  </ListWrap>
  </div>
, document.getElementById('components-textarea-item-demo-basic'));
````
