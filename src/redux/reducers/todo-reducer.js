const initialState = {
  todos: [
    { id: 1, value: 'Belajar React' },
    { id: 2, value: 'Belajar Redux' },
  ],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        id: Date.now(),
        value: action.payload,
      };
      const cloneTodos = [...state.todos, newTodo];
      return {
        todos: cloneTodos,
      };
    default:
      return state;
  }
}

export function addTodo(input) {
  return {
    type: 'ADD_TODO',
    payload: input,
  };
}

export default todoReducer;