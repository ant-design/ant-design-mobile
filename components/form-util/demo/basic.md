# 基本

- order: 0

列表主体内容的容器。

---

````jsx
import Promise from 'promise';
import { ListWrap, ListHeader, ListFooter, ListBody,ListItem, FormUtil} from 'antm';

const businessFormUtil = {
  dealSubmit() {
    const self = this;
    self.startValidate.call(self)
      .then(function () {
        console.log("passed validation");
        self.startUpload.call(self);
      }, function (e) {
        console.log(e);
        console.log("failed in form validation");
      })
  },
  startUpload() {
    const self = this;
    const data = self.collectData();

    console.log(data);
  }
};

// <Form>
//  <Input didMount={this.registerInput} value="456" {...shopPhoneInput} />
//  <Input didMount={this.registerInput} value="123" {...shopNameInput} />
// </Form>

const PageForm = React.createClass({
  mixins: [FormUtil, businessFormUtil],

  componentWillMount() {
    this.licenceInput = {
      init: () => {
        this.registerResumeHandler("category", (data) => {
          this.setState({
            extra: "已上传"
          });
          console.log(data);
          console.log("category");
        });
      },
      extraFormData: {
        extraA: "000",
        extraB: "111"
      },
      validate: () => {
        return true;
      },
      onClick: () => {
        console.log("on click");
        this.pushWindow("http://crmhome.stable.alipay.net/shop/shopCate.h5");
      }
    };

    this.photoInput = {
      validate: () => {
        return new Promise(function (fulfill, reject) {
          setTimeout(function () {
            fulfill(true);
          }, 1000);
        });
      },
      onClick: () => {
        this.pushWindow("http://crmhome.stable.alipay.net/shop/shopCate.h5");
      }
    };
  },

  render() {
    return (
      <div>
        <ListWrap >
          <ListHeader label="证照补全"/>
          <ListBody>
            <ListItem
              extra="请上传"
              arrow="horizontal"
              didMount={this.registerInput}
              {...this.licenceInput}
            >
              营业执照
            </ListItem>
            <ListItem
              extra="请上传"
              arrow="horizontal"
              didMount={this.registerInput}
              {...this.photoInput}
            >
              其他照片
            </ListItem>
          </ListBody>
          <ListFooter>我是表尾</ListFooter>
        </ListWrap>
        <button ref="uploadBtn" onClick={this.dealSubmit}>DoIT</button>
      </div>
    );
  }
});

const formInstance = ReactDOM.render(
  <PageForm />
  , document.getElementById('components-form-util-demo-basic'));
````
