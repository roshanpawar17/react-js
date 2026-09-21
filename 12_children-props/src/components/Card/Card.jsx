const Card = ({children, width}) => {
    return (
        <div className={`p-4 border rounded shadow ${width ? width : 'w-[30%]'}`}>
            {children}
        </div>
    )
}

export default Card;