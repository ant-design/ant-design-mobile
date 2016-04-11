import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import './index.less';
const Modal = React.createClass({
  propTypes: {
    style: PropTypes.object
  },
  getDefaultProps() {
    return {
      style: {}
    };
  },
  updateContent(){
    ReactDom.render(<div className="am-modal" style={this.props.style}>
      {this.props.children}
    </div>, this.div);
  },
  componentDidMount(){
    this.div = document.createElement('div');
    document.body.appendChild(this.div);
    document.body.style.overflow = 'hidden';

    this.updateContent();
  },
  componentDidUpdate(){
    this.updateContent();
  },
  componentWillUnmount(){
    document.body.style.overflow = '';
    ReactDom.unmountComponentAtNode(this.div);
    document.body.removeChild(this.div);
  },
  render(){
    return null;
  }
});

export default Modal;
