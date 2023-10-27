import { useState } from 'react';
import AddTodo from './components/AddTodo';

import ListTodo from './components/ListTodo';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle mode gelap
  };
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'} {/* Tombol toggle mode gelap */}
      </button>
      {/* main */}
      <div className="flex h-screen">
        <div className="m-auto">
          <h1 className="text-center font-semibold text-4xl">
            What's the <span className="text-[#9797f7]">plan</span> for today ?{' '}
          </h1>
          <div className="p-5">
            <AddTodo />
            <ListTodo />
          </div>
        </div>
      </div>
      {/* end */}
    </div>
  );
}

export default App;
