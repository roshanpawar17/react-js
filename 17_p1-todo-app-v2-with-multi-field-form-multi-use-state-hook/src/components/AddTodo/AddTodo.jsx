import { useState } from "react";

const AddTodo = ({setTodoItems}) => {

    const [todoName, setTodoName] = useState("");
    const [todoDate, setTodoDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setTodoItems((prevTodoItems) => ([
            ...prevTodoItems,
            {
                name: todoName,
                date: todoDate
            }
        ]));
    }

    return (
        <form className="flex gap-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Todo Name" className="p-2 border border-gray-300" value={todoName} onChange={(e) => setTodoName(e.target.value)} />
            <input type="date" className="p-2 border border-gray-300" value={todoDate} onChange={(e) => setTodoDate(e.target.value)} />
            <button type="submit" className="bg-purple-500 py-2 px-6 text-white">Add</button>
        </form>
    )
}

export default AddTodo;