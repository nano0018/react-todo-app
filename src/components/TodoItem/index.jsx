import './TodoItem.css';
import PropTypes from 'prop-types';
import { CompleteIcon } from '../CompleteIcon';
import { DeleteIcon } from '../DeleteIcon';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { TodoItem };
