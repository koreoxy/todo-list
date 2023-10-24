import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/reducers/todo-reducer';

function ListTodo() {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      {todos.map((item) => (
        <div key={item.id}>
          <span>{item.value}</span>
          <button>🖊</button>
          <button onClick={() => handleDelete(item.id)}>❎</button>
        </div>
      ))}
    </>
  );
}

export default ListTodo;
