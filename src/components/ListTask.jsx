
import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';


const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFilter] = React.useState('all'); // 'all', 'done', 'notDone'

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true; // 'all'
  });

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-100">Tasks</h2>
        <div className="space-x-2">
          {['all', 'done', 'notDone'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2 rounded-full font-medium transition duration-200 
                ${filter === type 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-gray-200 text-gray-700 hover:bg-indigo-500 hover:text-white'}`}
            >
              {type === 'all' ? 'All' : type === 'done' ? 'Done' : 'Not Done'}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => <Task key={task.id} task={task} />)
        ) : (
          <p className="text-center text-gray-500 py-4">No tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default ListTask;
