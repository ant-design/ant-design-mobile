---
order: 0
title: 图片上传
-----------

是

---

````jsx
import { Uploader, WhiteSpace } from 'antm';
         // sampleImage="https://t.alipayobjects.com/images/rmsweb/T1.gFiXX8cXXXXXXXX.jpg_q50.jpg"
         // sampleTip="需上传3~10张，上传照片中需要包含一张门头照片，如无门头照片将会审核失败"
const UploaderExample = React.createClass({
  render() {
    return (
      <Uploader
         value={[{
           url: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
           id: '2121'
         }, {
           url: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
           id: '2122'
         }, {
           url: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
           id: '2123'
         }, {
           url: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
           id: '2124'
         }, {
           url: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
           id: '2125'
         }, {
           url: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
           id: '2126'
         }]}
       />
    );
  }
});

ReactDOM.render(<UploaderExample />, mountNode);
````
