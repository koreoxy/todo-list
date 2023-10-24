import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/reducers/todo-reducer';

function InputTodo() {
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Tambahkan list todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default InputTodo;
