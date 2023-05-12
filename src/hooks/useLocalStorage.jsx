import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue = []) {
	const [item, setItem] = useState(initialValue);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	if (initialValue.length === 0) {
		initialValue = [];
	}

	useEffect(() => {
		setTimeout(() => {
			try {
				const itemStored = localStorage.getItem(itemName);
				let parsedItem;

				if (JSON.parse(itemStored).length === 0) {
					localStorage.setItem(
						itemName,
						JSON.stringify(initialValue)
					);
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(itemStored);
					setItem(parsedItem);
				}

				setLoading(false);
			} catch (error) {
        console.log(error);
				setLoading(false);
				setError(error);
			}
		}, 1500);
	}, []);

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
