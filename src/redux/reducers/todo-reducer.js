import axios from 'axios';

const initialValue = {
  // id: '',
  todos: [],
  isLoading: false,
  error: '',
};

function todoReducer(state = initialValue, action) {
  switch (action.type) {
    case 'START_FETCHING':
      return {
        ...state,
        isLoading: true,
      };
    case 'DELETE_FETCHING':
      return {
        ...state,
      };
    case 'SUCCESS_GET_TODO':
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    // case 'DELETE_TODO':
    //   const filterTodo = state.todos.filter(
    //     (item) => item.id != action.payload
    //   );
    //   return {
    //     todos: filterTodo,
    //   };
    case 'DELETE_DATA':
      return {
        ...state,
        todos: state.data.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}

function startFetching() {
  return {
    type: 'START_FETCHING',
  };
}

function successGetTodo(data) {
  return {
    type: 'SUCCESS_GET_TODO',
    payload: data,
  };
}

export function removeTodo(id) {
  return {
    type: 'DELETE_TODO',
    payload: id,
  };
}

export function getTodoApi() {
  // REDUX THUNK
  return async function (dispatch) {
    dispatch(startFetching());

    const { data } = await axios(
      'https://65387c56a543859d1bb17b17.mockapi.io/todo'
    );

    dispatch(successGetTodo(data));
  };
}

// ACTION ADD TODO
// ARROW FUNCTION REDUX THUNK
export const addTodo = (newTodo) => async (dispatch) => {
  // dispatch(startFetching());

  await axios.post('https://65387c56a543859d1bb17b17.mockapi.io/todo', newTodo);

  dispatch(getTodoApi());
};

export const deleteTodo = (id) => async (dispatch) => {
  await axios.delete(`https://65387c56a543859d1bb17b17.mockapi.io/todo/${id}`);
  dispatch({ type: 'DELETE_FETCHING' });

  dispatch({ type: 'DELETE_DATA', id });
};

export default todoReducer;
