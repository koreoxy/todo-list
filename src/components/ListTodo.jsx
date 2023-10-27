import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteTodo,
  editTodo,
  setFilter,
  toggleTodo,
} from '../redux/reducerTodo';
import EditTodo from './EditTodo';

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

  return (
    <div>
      <div className="">
        <button
          onClick={() => handleFilterChange('all')}
          className={activeFilter === 'all' ? 'font-bold' : ''}
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange('completed')}
          className={activeFilter === 'completed' ? 'font-bold' : ''}
        >
          Completed
        </button>
        <button
          onClick={() => handleFilterChange('incompleted')}
          className={activeFilter === 'incompleted' ? 'font-bold' : ''}
        >
          Incompleted
        </button>
      </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            {editTodoId === todo.id ? (
              <EditTodo todo={todo} onEditComplete={handleEditComplete} />
            ) : (
              <div className="">
                <div className="bg-primary p-5 ">
                  <span
                    onClick={() => dispatch(toggleTodo(todo.id))}
                    style={{
                      textDecoration: todo.completed ? 'line-through' : 'none',
                    }}
                  >
                    {todo.text}
                  </span>

                  <div>
                    <button
                      onClick={() => handleEditTodo(todo.id)}
                      className="bg-success p-2 me-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => {
                        dispatch(deleteTodo({ id: todo.id }));
                      }}
                      className="bg-red-500 p-2"
                    >
                      Remove
                    </button>
                  </div>
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
