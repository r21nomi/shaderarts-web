import * as React from 'react';
import Todo from '../atoms/Todo';

interface Props {
    todos: any[];
    onTodoClick: any;
}

const TodoList = ({ todos, onTodoClick }: Props) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ul>
);

export default TodoList;