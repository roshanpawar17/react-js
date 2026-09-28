
import AppName from './components/AppName/AppName';
import AddTodo from './components/AddTodo/AddTodo';
import TodoItems from './components/TodoItems/TodoItems';

import './App.css'
import { useState } from 'react';

function App() {

  const [todoItems, setTodoItems] = useState([]);
  console.log('Todo Items ', todoItems);

  return (
    <div className="flex flex-col gap-4 p-4">
      <AppName />
      <AddTodo setTodoItems={setTodoItems} />
      <TodoItems items={todoItems} />
    </div>
  )
}

export default App
