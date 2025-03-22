// src/components/KanbanBoard.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';

import { ClipboardList, Clock, CheckCircle } from 'lucide-react';



const KanbanBoard = () => {
  const tasks = useSelector((state) => state.tasks);
  
  // Filter tasks by their states
  const columns = {
    todo: tasks.filter(task => !task.isDone && !task.inProgress),
    inProgress: tasks.filter(task => task.inProgress),
    done: tasks.filter(task => task.isDone),
  };
  
  // Empty state component to avoid repetition
  const EmptyColumn = ({ icon, message }) => (
    <div className="flex flex-col justify-center items-center text-center py-8 text-gray-500 bg-white/60 rounded-lg border-2 border-dashed">
      {icon}
      <p className="mt-2 font-medium">{message || "No tasks in this column."}</p>
    </div>
  );
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-slate-100 rounded-xl">
      {/* To Do Column */}
      <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-indigo-500">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b">
          <ClipboardList size={20} className="text-indigo-600" />
          <h2 className="text-lg font-bold text-gray-800">
            Backlog 
            <span className="ml-2 px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
              {columns.todo.length}
            </span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {columns.todo.length > 0 ? (
            columns.todo.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))
          ) : (
            <EmptyColumn 
              icon={<ClipboardList size={24} className="text-indigo-400 mb-1 opacity-50" />} 
              message="Add a new task to get started" 
            />
          )}
        </div>
      </div>
      
      {/* In Progress Column */}
      <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-orange-500">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b">
          <Clock size={20} className="text-orange-600" />
          <h2 className="text-lg font-bold text-gray-800">
            In Progress
            <span className="ml-2 px-2 py-0.5 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
              {columns.inProgress.length}
            </span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {columns.inProgress.length > 0 ? (
            columns.inProgress.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))
          ) : (
            <EmptyColumn 
              icon={<Clock size={24} className="text-orange-400 mb-1 opacity-50" />} 
              message="No tasks in progress" 
            />
          )}
        </div>
      </div>
      
      {/* Done Column */}
      <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-emerald-500">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b">
          <CheckCircle size={20} className="text-emerald-600" />
          <h2 className="text-lg font-bold text-gray-800">
            Done
            <span className="ml-2 px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
              {columns.done.length}
            </span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {columns.done.length > 0 ? (
            columns.done.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))
          ) : (
            <EmptyColumn 
              icon={<CheckCircle size={24} className="text-emerald-400 mb-1 opacity-50" />} 
              message="Complete a task to see it here" 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
