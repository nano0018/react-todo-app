import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { ReactComponent as AddSVG } from '../CreateTodoButton/plus.svg';
import './CreateTodoButton.css';

function CreateTodoButton() {
  const { openModalAddTodo, setOpenModalAddTodo } = useContext(TodoContext);

  return (
    <button
      className="CreateTodoButton"
      onClick={() => setOpenModalAddTodo(!openModalAddTodo)}
    ><AddSVG/></button>
  );
}

export { CreateTodoButton };
