const PassingArguments = ({handleClick}) => {
    return (
        <>
            <h2>2. Passing Arguments</h2>
            <button className="bg-purple-500 text-white p-3 font-bold w-1/12" onClick={(event) => handleClick(event, 'Roshan')}>Greet Roshan</button>
            <button className="bg-green-500 text-white p-3 font-bold w-1/12" onClick={(event) => handleClick(event, 'Omkar')}>Greet Omkar</button>
        </>
    )
}

export default PassingArguments;