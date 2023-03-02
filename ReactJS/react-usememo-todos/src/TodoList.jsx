import React, { useMemo, useCallback } from "react";
import { filterTodos } from './Utils';

const TodoList = ({ todos, tab, isDark }) => {

	const visibleTodos = useMemo(() => {
		return filterTodos(tab, todos);
	}, [tab]);

	console.debug('TodoList RENDER!');

	return (
		<div>
			<h4>Nota: ¡filterTodos() se ralentiza a propósito!</h4>
			<div className={`list ${isDark ? 'dark-theme' : 'light-theme'}`}>
				<ul>
					{visibleTodos.map(todo =>
						(
							<li key={todo.id} className={`todo-item ${todo.done ? 'done' : ''}`}>{todo.text}</li>
						)
					)}
				</ul>
			</div>
		</div>
	)
}

export default TodoList;
// export default React.memo(TodoList);