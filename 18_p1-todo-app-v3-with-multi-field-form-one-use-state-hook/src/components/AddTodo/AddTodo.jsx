import { useState } from "react";

const AddTodo = ({setTodoItems}) => {

    const [todoItem, setTodoItem] = useState({
        name: "",
        date: ""
    });
    console.log(JSON.stringify(todoItem))

    const handleSubmit = (e) => {
        e.preventDefault();

        setTodoItems((prevTodoItems) => ([
            ...prevTodoItems,
            todoItem
        ]));
    }

    return (
        <form className="flex gap-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Todo Name" className="p-2 border border-gray-300" value={todoItem.name} onChange={(e) => setTodoItem((prevItem) =>  ({...prevItem, name: e.target.value}) )} />
            <input type="date" className="p-2 border border-gray-300" value={todoItem.date} onChange={(e) => setTodoItem((prevItem) => ({ ...prevItem, date: e.target.value }) )} />
            <button type="submit" className="bg-purple-500 py-2 px-6 text-white">Add</button>
        </form>
    )
}

export default AddTodo;