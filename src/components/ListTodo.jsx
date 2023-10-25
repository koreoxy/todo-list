import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, getTodoApi } from '../redux/reducers/todo-reducer';

function ListTodo() {
  const { isLoading, todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [list, SetList] = useState('');

  useEffect(() => {
    dispatch(getTodoApi());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        todos.map((item) => (
          <div key={item.id}>
            <span className="me-9">{item.value}</span>
            <button className="bg-green-500 p-5 me-2">Edit</button>
            <button
              className="bg-red-500 p-5"
              onClick={() => handleDelete(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </>
  );
}

export default ListTodo;
