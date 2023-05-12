import { useLocalStorage } from '../../hooks/useLocalStorage';
import PropTypes from 'prop-types';
import { createContext } from 'react';
import { useState } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const {
    item: todos,
    modifyItem: modifyTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V2');
  const [searchValue, setSearchValue] = useState('');
  const [openModalAddTodo, setOpenModalAddTodo] = useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue.length === 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodoList = [...todos];
    newTodoList.push({
      text,
      completed: false
    });
    modifyTodos(newTodoList);
  };

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const todo = todos[todoIndex];
    todos[todoIndex] = {
      ...todo,
      completed: !todo.completed,
    };
    modifyTodos([...todos]);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    todos.splice(todoIndex, 1);
    modifyTodos([...todos]);
  };
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchedTodos,
        searchValue,
        setSearchValue,
        completeTodos,
        deleteTodos,
        openModalAddTodo,
        setOpenModalAddTodo,
        addTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TodoContext, TodoProvider };
