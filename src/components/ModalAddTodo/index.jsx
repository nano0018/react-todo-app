import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './ModalAddTodo.css';
function ModalAddTodo({ children }) {
  return ReactDOM.createPortal(
      <div className="modal-card">
        {children}
      </div>,
    document.getElementById('modal')
  );
}

ModalAddTodo.propTypes = {
  children: PropTypes.node,
};

export { ModalAddTodo };
