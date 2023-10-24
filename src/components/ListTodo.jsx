import { useSelector } from 'react-redux';

function ListTodo() {
  const { todos } = useSelector((state) => state.todo);

  return (
    <>
      {todos.map((item) => (
        <div key={item.id}>
          <span>{item.value}</span>
          <button>🖊</button>
          <button>❎</button>
        </div>
      ))}
    </>
  );
}

export default ListTodo;
