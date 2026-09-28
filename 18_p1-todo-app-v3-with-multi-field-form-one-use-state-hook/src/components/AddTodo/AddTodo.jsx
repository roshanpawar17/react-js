import { useState } from "react";

const AddTodo = ({setTodoItems}) => {

    const [todoItem, setTodoItem] = useState({
        todoname: "",
        tododate: ""
    });
    console.log(JSON.stringify(todoItem))

    const handleSubmit = (e) => {
        e.preventDefault();

        setTodoItems((prevTodoItems) => ([
            ...prevTodoItems,
            todoItem
        ]));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setTodoItem((prevItem) => ({
            ...prevItem,
            [name]: value
        }));
    }

    return (
        <form className="flex gap-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Todo Name" className="p-2 border border-gray-300" name="todoname" value={todoItem.todoname} onChange={handleChange} />
            <input type="date" className="p-2 border border-gray-300" name="tododate" value={todoItem.tododate} onChange={handleChange} />
            <button type="submit" className="bg-purple-500 py-2 px-6 text-white">Add</button>
        </form>
    )
}

export default AddTodo;