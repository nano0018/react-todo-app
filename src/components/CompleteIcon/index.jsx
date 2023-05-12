import { TodoIcon } from '../TodoIcon';
import PropTypes from 'prop-types';

function CompleteIcon(props) {
  return <TodoIcon
    type="check"
    color={props.completed ? 'green' : 'gray'}
    onClick={props.onComplete}/>;
}

CompleteIcon.propTypes = {
  completed: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired
};


export { CompleteIcon };
