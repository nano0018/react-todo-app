import { TodoIcon } from '../TodoIcon';
import PropTypes from 'prop-types';

function DeleteIcon(props) {
  return <TodoIcon type="delete" color="gray"
  onClick={props.onDelete}/>;
}

DeleteIcon.propTypes = {
  onDelete: PropTypes.func.isRequired
};

export { DeleteIcon };
