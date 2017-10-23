---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---


````jsx
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

function showToast() {
  Toast.info('This is a toast tips !!!', 1);
}

function showToastNoMask() {
  Toast.info('Toast without mask !!!', 2, null, false);
}

function successToast() {
  Toast.success('Load success !!!', 1);
}

function failToast() {
  Toast.fail('Load failed !!!', 1);
}

function offline() {
  Toast.offline('Network connection failed !!!', 1);
}

function loadingToast() {
  Toast.loading('Loading...', 1, () => {
    console.log('Load complete !!!');
  });
}

const customIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="am-icon am-icon-md">
    <path fillRule="evenodd" d="M59.177 29.5s-1.25 0-1.25 2.5c0 14.47-11.786 26.244-26.253 26.244C17.206 58.244 5.417 46.47 5.417 32c0-13.837 11.414-25.29 25.005-26.26v6.252c0 .622-.318 1.635.198 1.985a1.88 1.88 0 0 0 1.75.19l21.37-8.545c.837-.334 1.687-1.133 1.687-2.384C55.425 1.99 53.944 2 53.044 2h-21.37C15.134 2 1.667 15.46 1.667 32c0 16.543 13.467 30 30.007 30 16.538 0 29.918-13.458 29.993-30 .01-2.5-1.24-2.5-1.24-2.5h-1.25" />
  </svg>
);

class ToastExample extends React.Component {
  componentDidMount() {
    Toast.loading('Loading...', 30, () => {
      console.log('Load complete !!!');
    });

    setTimeout(() => {
      Toast.hide();
    }, 3000);
  }
  render() {
    return (
      <WingBlank>
        <WhiteSpace />
        <Button onClick={showToast}>text only</Button>
        <WhiteSpace />
        <Button onClick={showToastNoMask}>without mask</Button>
        <WhiteSpace />
        <Button onClick={() => Toast.info(customIcon(), 1)}>
          cumstom icon
        </Button>
        <WhiteSpace />
        <Button onClick={successToast}>success</Button>
        <WhiteSpace />
        <Button onClick={failToast}>fail</Button>
        <WhiteSpace />
        <Button onClick={offline}>network failure</Button>
        <WhiteSpace />
        <Button onClick={loadingToast}>loading</Button>
        <WhiteSpace />
      </WingBlank>
    );
  }
}

ReactDOM.render(<ToastExample />, mountNode);
````
