
import React from 'react';
import { useDispatch } from 'react-redux'; 
import { toggleTask, setInProgress, deleteTask } from '../features/tasksSlice';

import { CheckCircle, Clock, Trash2 } from 'lucide-react';



const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  
  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };
  
  const handleInProgress = () => {
    dispatch(setInProgress(task.id));
  };
  
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  
  return (
    <div className={`bg-white p-5 mb-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col gap-y-5 ${
      task.isDone ? 'border-l-4 border-green-500' : 
      task.inProgress ? 'border-l-4 border-amber-500' : 'border-l-4 border-blue-500'
    }`}>
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-x-4">
          {/* Show "Mark as In Progress" if task is neither done nor in progress */}
          {!task.isDone && !task.inProgress && (
            <button
              onClick={handleInProgress}
              className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2"
            >
              <Clock size={20} />
              Mark as In Progress
            </button>
          )}
          {/* Show "Done" button if the task is in progress */}
          {task.inProgress && (
            <button
              onClick={handleToggle}
              className="text-sm font-semibold text-white bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center gap-2"
            >
              <CheckCircle size={20} />
              Done
            </button>
          )}
        </div>
        {/* Delete button with margin-left added */}
        <button
          onClick={handleDelete}
          className="text-red-600 hover:text-red-800 text-sm font-semibold transition-colors focus:outline-none flex items-center gap-2 ml-1"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
      {/* Task description */}
      <h3
        className={`font-semibold ${
          task.isDone 
            ? 'line-through text-gray-500' 
            : task.inProgress 
              ? 'text-amber-700' 
              : 'text-gray-800'
        }`}
      >
        {task.description}
        
        {/* Status indicator */}
        {task.isDone && (
          <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Completed
          </span>
        )}
        {task.inProgress && (
          <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
            In Progress
          </span>
        )}
      </h3>
    </div>
  );
};

export default TaskCard;
