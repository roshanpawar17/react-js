const TodoItem = ({ item }) => {
    return (
        <div className="flex gap-4">
            <p className="w-[20rem]">{ item?.name || "-" }</p>
            <p>{ item?.date || "-" }</p>
        </div>
    )
}

export default TodoItem;