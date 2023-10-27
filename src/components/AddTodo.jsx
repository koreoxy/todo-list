import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/reducerTodo';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

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
    <div className="border-2 border-[#202020] rounded-full p-2 hover:shadow-md">
      <div className="flex flex-row justify-between">
        <input
          className="bg-transparent py-2 px-3 text-[#9797f7] font-bold  w-full focus:outline-none"
          type="text"
          placeholder="Masukan task baru..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddTodo} className="w-10 text-[#9797f7]">
          <PlusCircleIcon />
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
