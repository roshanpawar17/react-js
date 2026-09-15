
import AppName from './components/AppName/AppName';
import AddTodo from './components/AddTodo/AddTodo';
import TodoItems from './components/TodoItems/TodoItems';

import './App.css'

function App() {

  const todoItems = [
    {
      id: 1,
      name: "Complete React Components",
      date: "2026-09-15"
    },
    {
      id: 2,
      name: "Learn React Props",
      date: "2026-09-16"
    },
    {
      id: 3,
      name: "Practice JavaScript Map Method",
      date: "2026-09-17"
    },
    {
      id: 4,
      name: "Create React Todo App",
      date: "2026-09-18"
    },
    {
      id: 5,
      name: "Learn CSS Modules",
      date: "2026-09-19"
    },
    {
      id: 6,
      name: "Review Git Commands",
      date: "2026-09-20"
    },
    {
      id: 7,
      name: "Practice MongoDB CRUD",
      date: "2026-09-21"
    },
    {
      id: 8,
      name: "Build Node.js API",
      date: "2026-09-22"
    },
    {
      id: 9,
      name: "Complete Angular Task",
      date: "2026-09-23"
    },
    {
      id: 10,
      name: "Review Pending PRs",
      date: "2026-09-24"
    }
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      <AppName />
      <AddTodo />
      <TodoItems items={todoItems} />
    </div>
  )
}

export default App
