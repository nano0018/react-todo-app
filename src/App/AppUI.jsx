import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import TodosLoading from '../components/TodosLoading';
import TodosError from '../components/TodosError';
import EmptyTodos from '../components/EmptyTodos';
import { TodoContext } from '../context/TodoContext';
import { useContext } from 'react';
import { ModalAddTodo } from '../components/ModalAddTodo';
import { TodoForm } from '../components/TodoForm';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModalAddTodo,
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      {openModalAddTodo && (
        <ModalAddTodo>
          <TodoForm/>
        </ModalAddTodo>
      )}
    </>
  );
}

export default AppUI;
