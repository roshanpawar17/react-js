const TodoItem = ({ item }) => {
    return (
        <div className="flex gap-4">
            <p className="w-[20rem]">{ item?.todoname || "-" }</p>
            <p>{ item?.tododate || "-" }</p>
        </div>
    )
}

export default TodoItem;