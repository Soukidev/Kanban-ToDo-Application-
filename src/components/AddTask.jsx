
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksSlice';



const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (description) {
      dispatch(addTask({ id: Date.now(), description, isDone: false }));
      setDescription('');
    }
  };

  
  
  
  return (
    <div className="flex space-x-2 mb-4">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder="Add a new task"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-200"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;