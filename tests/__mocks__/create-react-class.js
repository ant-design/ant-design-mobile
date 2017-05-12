import CreateClass from 'create-react-class';
import Preact from 'preact-compat/lib/create-react-class';

const mockReactCreateClass = process.env.TEST_ENV === 'PREACT' ? Preact : CreateClass;

export default mockReactCreateClass;

module.exports = mockReactCreateClass;
