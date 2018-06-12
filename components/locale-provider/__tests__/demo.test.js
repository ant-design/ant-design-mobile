import ReactDOM from 'react-dom';
import webDemoTest from '../../../tests/shared/demoTest';

// TODO temporarily fix
// https://github.com/airbnb/enzyme/issues/1150
ReactDOM.createPortal = jest.fn().mockReturnValue(null);

webDemoTest('locale-provider');
