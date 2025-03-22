
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask, deleteTask } from '../features/tasksSlice';



const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    const newDescription = prompt('Edit task:', task.description);
    if (newDescription) {
      dispatch(editTask({ id: task.id, description: newDescription }));
    }
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  
  
  return (
    <div className="flex justify-between items-center border-b border-gray-300 p-4 hover:bg-gray-100 transition duration-200 ease-in-out">
      <span
        onClick={handleToggle}
        className={`cursor-pointer ${task.isDone ? 'line-through text-gray-100' : 'text-gray-800'}`}
      >
        {task.description}
      </span>
      <div className="flex gap-x-4">
        <button onClick={handleEdit} className="text-blue-600 hover:text-blue-800 transition duration-200">
          Edit
        </button>
        <button onClick={handleDelete} className="text-red-600 hover:text-red-800 transition duration-200">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;