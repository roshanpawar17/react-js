const Button = () => {

    const buttons = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

    return (
        <div className="flex justify-center gap-4 flex-wrap">
            {
                buttons.map((button) => (
                    <button key={button} className="border p-2 w-1/4 bg-gray-100">{button}</button>
                ))
            }
        </div>
    )
}

export default Button;