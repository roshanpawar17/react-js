const PassingArguments = () => {

    const handleClick = (event, name) => {
        console.log("Event ", event);
        alert(`Hello, ${name}`);
    }

    return (
        <>
            <h2>2. Passing Arguments</h2>
            <button className="bg-purple-500 text-white p-3 font-bold w-1/12" onClick={(event) => handleClick(event, 'Roshan')}>Greet</button>
        </>
    )
}

export default PassingArguments;