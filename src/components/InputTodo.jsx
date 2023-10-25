import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/reducers/todo-reducer';

function InputTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    // console.log(input);
    let newTodo = {
      value: input,
      status: false,
    };
    dispatch(addTodo(newTodo));
    setInput('');
  };
  return (
    <div className="mb-5">
      <form>
        <input
          type="text"
          placeholder="Tambahkan Todo list"
          className="bg-yellow-100 p-5 text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-yellow-500 p-5 text-white" onClick={handleClick}>
          Add
        </button>
      </form>
    </div>
  );
}

export default InputTodo;
