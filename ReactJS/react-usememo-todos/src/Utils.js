

export function createTodos() {
	let todos = [];

	while (todos.length < 25) {
		todos.push ({
			id: (todos.length + 1),
			text: 'Todo ' + (todos.length + 1),
			done: Math.round(Math.random()) ? true : false
		});
	}
	return todos;
}

export function filterTodos(type, todos) {
	console.log('@filterTodos --> Simulating a delay...');
	let startTime = performance.now();
	while (performance.now() - startTime < 1000) {
	}

	return todos.filter(todo => {
		if (type == 'all') {
			return true;
		} else if (type == 'undone') {
			return !todo.done
		} else {
			return todo.done
		}
	})
}