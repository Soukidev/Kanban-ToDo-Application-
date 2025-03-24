 Task Management App

A simple and efficient task management application built with React, Redux Toolkit, and Tailwind CSS. Users can create, update, delete, and track the status of tasks with an intuitive Kanban-style board.

 🚀 Features

- 📝 Add, edit, and delete tasks
- ✅ Mark tasks as "Done" or "In Progress"
- 📌 Kanban-style task organization
- 🎨 Beautiful and responsive UI with Tailwind CSS
- 🔥 State management using Redux Toolkit

 🛠️ Technologies Used

- Frontend: React, Vite
- State Management:** Redux Toolkit
- Styling: Tailwind CSS

 📂 Project Structure

src
├── assets
├── components
│   ├── AddTask.jsx
│   ├── KanbanBoard.jsx
│   ├── ListTask.jsx
│   ├── Task.jsx
│   └── TaskCard.jsx
├── features
│   └── tasksSlice.js
├── App.css
├── App.jsx
├── index.css
├── main.jsx
└── store.js

📌 Usage

- Click "Add Task" to create a new task.
- Use the "Mark as In Progress"** or **"Done"** buttons to update task status.
- Click "Edit" to modify a task.
- Click "Delete" to remove a task.


----------
In this checkpoint, we are going to use what we have learned previously to create a ToDo Application while using Redux to manage the global state.


Instructions

Create  the following component:
Addtask
ListTask
Task
Every task should have the following attributes:I d, description, isDone
The user should be:
Able to add a newTodo
Filter the tasks by (done/not)
Edit a task
