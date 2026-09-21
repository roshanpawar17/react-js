const BasicExample = () => {

    const handleClick = (event) => {
        console.log('Event ', event);
        alert("Button Clicked");
    }

    return (
        <>
            <h2>1. Basic Example</h2>
            <button className="bg-orange-400 text-white p-3 font-bold w-1/12" onClick={handleClick}>Click Me</button>
        </>
    )
}

export default BasicExample;