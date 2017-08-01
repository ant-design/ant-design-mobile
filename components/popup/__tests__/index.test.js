import React from 'react';
// import { render } from 'enzyme';
// import { renderToJson } from 'enzyme-to-json';
import Popup from '../index';

describe('Popup', () => {
  it('renders correctly', () => {
    Popup.show(<div className="pop">Popup Content</div>);
    expect([document.querySelector('.pop')]).toHaveLength(1);
  });
});
