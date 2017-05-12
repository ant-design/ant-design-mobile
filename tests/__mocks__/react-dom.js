import ReactDOM from 'react-dom';
import Preact from 'preact-compat';

const mockReactDOM = process.env.TEST_ENV === 'PREACT' ? Preact : ReactDOM;

export default mockReactDOM;
module.exports = mockReactDOM;
