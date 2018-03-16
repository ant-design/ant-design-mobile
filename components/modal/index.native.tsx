import alert from './alert.native';
import Modal from './Modal.native';
import operation from './operation.native';
import prompt from './prompt.native';

Modal.alert = alert;
Modal.operation = operation;
Modal.prompt = prompt;

export default Modal;
