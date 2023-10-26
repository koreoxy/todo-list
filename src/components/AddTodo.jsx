import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/reducerTodo';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch(
        addTodo({
          id: Date.now(),
          text,
          completed: false,
        })
      );
      setText('');
    }
  };

  return (
    <div className="mt-5 mb-5 ml-5">
      <input
        className="border-blue-500 border-2 p-2"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleAddTodo}
        className="bg-green-500 text-white font-bold p-2"
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
