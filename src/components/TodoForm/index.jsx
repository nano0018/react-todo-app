import { useContext, useState } from 'react';
import './TodoForm.css';
import { TodoContext } from '../../context/TodoContext';
function TodoForm() {
  const { setOpenModalAddTodo, addTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState('');

  const onChange = (event) => {
    setNewTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodo) {
      addTodo(newTodo);
    }
    onExit();
  };
  const onExit = () => {
    setOpenModalAddTodo(false);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Escribe tu nuevo todo!</label>
        <textarea
          value={newTodo}
          cols="30"
          rows="5"
          placeholder="Ingresa tu tarea"
          onChange={onChange}
        ></textarea>
        <div className="button-wrapper">
          <button
            type="button"
            className="btn-todo exit-add-todo"
            onClick={onExit}
          >
            Cancelar
          </button>
          <button type="submit" className="btn-todo add-todo">
            Añadir tarea
          </button>
        </div>
      </form>
    </>
  );
}

export { TodoForm };
