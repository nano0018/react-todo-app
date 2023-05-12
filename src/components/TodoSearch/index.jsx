import { useContext } from 'react';
import './TodoSearch.css';
import { TodoContext } from '../../context/TodoContext';

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Filtrar tareas"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
