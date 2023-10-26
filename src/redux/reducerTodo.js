import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    { id: 1, text: 'belajar redux' },
    { id: 2, text: 'belajar react' },
  ],
  filter: 'all',
};

export const todoSlice = createSlice({
  name: 'todos',
  // initialState: { value: DataTodo },
  initialState,

  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },

    deleteTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload.id);
    },

    editTodo: (state, action) => {
      state.value.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
      });
    },

    toggleTodo: (state, action) => {
      const todo = state.value.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleTodo, setFilter } =
  todoSlice.actions;

export default todoSlice.reducer;
