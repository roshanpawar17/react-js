function FunctionCalls() {

    const city = "Mumbai";

    const showName = (name) => {
        return name;
    }

    return (
        <div>
            <h2>3. Function Calls</h2>
            <p>City: { city?.toUpperCase() }</p>
            <p>My name is <b>{ showName("Roshan") }</b></p>
            <p>My name is <b>{ showName("Omkar") }</b></p>
        </div>
    )
}

export default FunctionCalls;