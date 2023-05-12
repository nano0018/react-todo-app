import { useEffect, useState } from 'react';

function useLocalStorage(itemName, initialValue = []) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  if (initialValue.length === 0) {
    initialValue = [
      { text: 'Tomar el curso de intro a React', completed: false },
    ];
  }

  useEffect(() => {
    setTimeout(() => {
      try {
        const itemStored = localStorage.getItem(itemName);
        let parsedItem;

        if (JSON.parse(itemStored).length === 0) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(itemStored);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }, 1500);
  }, [itemName, initialValue]);

  const modifyItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };

  return {
    item,
    modifyItem,
    loading,
    error,
  };
}

export { useLocalStorage };
