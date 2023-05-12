import './TodoList.css'
import PropTypes from "prop-types";

function TodoList(props) {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

TodoList.propTypes = {
	children: PropTypes.array.isRequired,
};


export { TodoList };
