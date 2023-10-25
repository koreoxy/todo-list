import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';

function App() {
  return (
    <div className="container mx-20 my-20">
      <h1 className="font-bold text-2xl">Todo App</h1>
      <InputTodo />
      <ListTodo />
    </div>
  );
}

export default App;
