import React, { PropTypes } from 'react';
import ListWrap from '../list-wrap/index';
import ListBody from '../list-body/index';
import CheckboxItem from '../checkbox-item/index';

let ListSelector = React.createClass({
  propTypes: {
    value: PropTypes.array,
    onChange: PropTypes.func,
    type: PropTypes.string,
    data: PropTypes.array,
  },
  getDefaultProps(){
    return {
      type: 'radio',
      value: [],
      data: [],
    };
  },
  _handleChange(id) {
    if (this.props.type === 'radio') {
      this.props.onChange([id]);
    } else {
      const selectedVal = this.props.value;
      if (!selectedVal.includes(id)) {
        selectedVal.push(id);
      } else {
        const index = selectedVal.indexOf(id);
        selectedVal.splice(index, 1);
      }
      this.props.onChange(selectedVal);
    }
  },
  render(){
    const { value, data } = this.props;
    const itemsDom = [];
    data.forEach((el, idx) => {
      let inputProp = {};
      inputProp.checked = value.includes(el.id) ? true : false;
      itemsDom.push(<CheckboxItem key={idx} {...inputProp} onChange={this._handleChange.bind(this, el.id)}>{el.name}</CheckboxItem>);
    });
    return (
      <ListWrap>
        <ListBody>
          {itemsDom}
        </ListBody>
      </ListWrap>
    );
  }
});

export default ListSelector;
