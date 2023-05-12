import { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../context/TodoContext';

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h2>
  );
}


export { TodoCounter };
