import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';

type AddTodoProps = {
  onAdd: (text: string) => void;
};

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Tooltip title="Add a new todo" arrow>
        <button onClick={handleAdd}>Add</button>
      </Tooltip>
    </div>
  );
};

export default AddTodo;
