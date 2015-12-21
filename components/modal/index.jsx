import React, {PropTypes} from 'react';
import ReactDom from 'react-dom';

const Modal = React.createClass({
  propTypes: {
    show: PropTypes.string
  },
  getDefaultProps() {
    return {
      show: 'none'
    };
  },
  updateContent(){
    ReactDom.render(<div style={{
      display: (this.props.show ? 'block' : 'none'),
      overflowY:'scroll',
      position:'absolute',
      left:'0',
      top:'0',
      width:'100%',
      height:'100%',
      background:'#ABABAB',
      'zIndex':100}
    }>
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
