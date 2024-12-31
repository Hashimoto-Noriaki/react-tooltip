import React from 'react';
import Tooltip from '@mui/material/Tooltip';

type Todo = {
  id: string;
  text: string;
};

type TodoListProps = {
  todos: Todo[];
  onDelete: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <Tooltip title="Delete this todo" arrow>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </Tooltip>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
