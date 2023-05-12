import { ReactComponent as CheckSVG } from '../CompleteIcon/check.svg';
import { ReactComponent as DeleteSVG } from '../DeleteIcon/delete.svg';
import './TodoIcon.css'
import PropTypes from 'prop-types';

const iconTypes = {
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};
function TodoIcon(props) {
  return (
    <span className={`Icon-container Icon-container-${props.type}`} onClick={props.onClick}>
      {iconTypes[props.type](props.color)}
    </span>
  );
}

TodoIcon.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { TodoIcon };
