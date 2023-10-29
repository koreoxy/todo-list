import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteTodo,
  editTodo,
  setFilter,
  toggleTodo,
} from '../redux/todoSlice';
import EditTodo from './EditTodo';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

const TodoList = () => {
  const todos = useSelector((state) => {
    const filter = state.todos.filter;
    if (filter === 'completed') {
      return state.todos.value.filter((todo) => todo.completed);
    } else if (filter === 'incompleted') {
      return state.todos.value.filter((todo) => !todo.completed);
    } else {
      return state.todos.value;
    }
  });
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    dispatch(setFilter(filter));
  };

  const [editTodoId, setEditTodoId] = useState(null);

  const handleEditTodo = (todoId) => {
    setEditTodoId(todoId);
  };

  const handleEditComplete = () => {
    setEditTodoId(null);
  };

  const handleToggleComplete = (todoId) => {
    dispatch(toggleTodo(todoId));
  };

  return (
    <div className="">
      <div className="flex flex-row justify-around mt-5">
        <button
          onClick={() => handleFilterChange('all')}
          className={
            activeFilter === 'all'
              ? 'font-bold underline underline-offset-8 text-[#9797f7] text-lg'
              : 'text-lg'
          }
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange('completed')}
          className={
            activeFilter === 'completed'
              ? 'font-bold underline underline-offset-8 text-[#9797f7] text-lg'
              : 'text-lg'
          }
        >
          Completed
        </button>
        <button
          onClick={() => handleFilterChange('incompleted')}
          className={
            activeFilter === 'incompleted'
              ? 'font-bold underline underline-offset-8 text-[#9797f7] text-lg'
              : 'text-lg'
          }
        >
          Incompleted
        </button>
      </div>
      <div>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="border-2 border-[#444444] rounded-md mt-5 mb-5 max-w-lg"
          >
            {editTodoId === todo.id ? (
              <EditTodo todo={todo} onEditComplete={handleEditComplete} />
            ) : (
              <div className="p-5">
                <div className="flex gap-2">
                  <input
                    className="appearance-none w-5 h-5 border-2 border-[#444444] rounded-sm bg-white
                  mt-1 shrink-0
                checked:bg-[#9797f7] checked:border-2 cursor-pointer"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(todo.id)}
                  />

                  <span
                    onClick={() => dispatch(toggleTodo(todo.id))}
                    className={`font-bold cursor-pointer text-lg ${
                      todo.completed ? 'line-through' : 'none'
                    } `}
                  >
                    {todo.text}
                  </span>
                </div>

                <div className="mt-5 flex justify-end">
                  <button
                    onClick={() => handleEditTodo(todo.id)}
                    className="bg-[#fcaa51] rounded-lg p-2 me-2 w-10"
                  >
                    <PencilSquareIcon />
                  </button>
                  <button
                    onClick={() => {
                      dispatch(deleteTodo({ id: todo.id }));
                    }}
                    className="bg-[#ff5a5a] rounded-lg p-2 w-10"
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
