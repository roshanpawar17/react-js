import TodoItem from "../TodoItem/TodoItem";

const TodoItems = ({ items }) => {
    return (
        <>
            <div className="flex gap-4">
                <div className="w-[20rem] font-medium">Todo Name</div>
                <div className="font-medium">Date</div>
            </div>
            <div className="flex flex-col gap-4">
                {
                    items?.length ? (
                        items.map((item) => (
                            <TodoItem key={item?.id} item={item} />
                        ))
                    ) : <h3>Items not Available</h3>
                }
            </div>
        </>
    )
}

export default TodoItems;