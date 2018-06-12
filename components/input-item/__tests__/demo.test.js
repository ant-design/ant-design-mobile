import ReactDOM from 'react-dom';
import webDemoTest from '../../../tests/shared/demoTest';

ReactDOM.createPortal = jest.fn().mockReturnValue(null);

webDemoTest('input-item');
