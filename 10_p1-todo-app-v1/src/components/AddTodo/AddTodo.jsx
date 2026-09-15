const AddTodo = () => {
    return (
        <div className="flex gap-4">
            <input type="text" placeholder="Todo Name" className="p-2 border border-gray-300"/>
            <input type="date" className="p-2 border border-gray-300"/>
            <button className="bg-purple-500 py-2 px-6 text-white">Add</button>
        </div>
    )
}

export default AddTodo;