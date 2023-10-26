import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './reducerTodo';
// import todoReducer from './reducers/todo-reducer';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
