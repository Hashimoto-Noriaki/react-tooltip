import React, { useState } from 'react';
import TodoList from '../organisms/TodoList';
import AddTodo from '../molecules/AddTodo';
import { useAuth } from '../hooks/useAuth';

type Todo = {
  id: string;
  text: string;
};

const TodoPage: React.FC = () => {
  const { logout } = useAuth();
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: String(Date.now()), text }]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default TodoPage;
