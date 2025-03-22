
import { createSlice } from '@reduxjs/toolkit';


const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      // To Add a new task with default isDone and inProgress states
      state.push({ ...action.payload, isDone: false, inProgress: false });
    },
    toggleTask: (state, action) => {
      // Toggle the isDone state of a task
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    setInProgress: (state, action) => {
      // Toggle the inProgress state of a task
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.inProgress = !task.inProgress; // Toggle inProgress state
      }
    },
    editTask: (state, action) => {
      // Edit the description of a task
      const { id, description } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.description = description;
      }
    },
    deleteTask: (state, action) => {
      // Delete a task from the list
      return state.filter(task => task.id !== action.payload);
    },
  },
});

// Export the actions to be used in components
export const { addTask, toggleTask, setInProgress, editTask, deleteTask } = tasksSlice.actions;

// Export the reducer to be used in the store
export default tasksSlice.reducer;