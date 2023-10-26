import React from 'react';
import { setFilter } from '../redux/reducerTodo';

function Filter() {
  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };
  return (
    <div>
      <button onClick={() => handleFilterChange('all')}>All</button>
      <button onClick={() => handleFilterChange('completed')}>Completed</button>
      <button onClick={() => handleFilterChange('incompleted')}>
        Incompleted
      </button>
    </div>
  );
}

export default Filter;
