import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/reducerTodo';

const EditTodo = ({ todo, onEditComplete }) => {
  const [text, setText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleEditTodo = () => {
    if (text.trim() !== '') {
      dispatch(editTodo({ id: todo.id, text }));
      onEditComplete();
    }
  };
  return (
    <div className="mt-5 ml-5">
      <input
        className="border-blue-500 border-2 p-2"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleEditTodo} className="bg-green-500 p-2">
        Save
      </button>
    </div>
  );
};

export default EditTodo;
