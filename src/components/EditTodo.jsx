import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/todoSlice';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

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
    <div className="mt-5 border-2 border-[#444444] rounded-full p-2 hover:shadow-md m-5">
      <div className="flex flex-row justify-between">
        <input
          className="bg-transparent py-2 px-3 text-[#9797f7] font-bold w-full focus:outline-none"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleEditTodo} className="w-10 text-[#9797f7]">
          <PlusCircleIcon />
        </button>
      </div>
    </div>
  );
};

export default EditTodo;
