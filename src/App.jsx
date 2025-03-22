import React from 'react';
import './App.css'
import AddTask from './components/AddTask'
import ListTask from './components/ListTask'
import KanbanBoard from './components/KanbanBoard';




const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-r from-gray-600 to-purple-400 text-white p-8">
      <div className="w-full h-full max-w-4xl bg-gray-800 p-8 rounded-3xl shadow-2xl">
        <h1 className="text-4xl font-semibold text-center mb-6 tracking-wide text-white">
          ToDo Application
        </h1>
        
        <div className="space-y-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <AddTask />
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <ListTask />
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <KanbanBoard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
