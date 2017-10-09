const Enzyme = require('enzyme');
const ReactDOM = require('react-dom');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

ReactDOM.createPortal = jest.fn().mockReturnValue(null);
