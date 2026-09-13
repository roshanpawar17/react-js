function ConditionalRendering() {

    const isLoggedIn = true;

    return (
        <div>
            <h2>4. Conditional Rendering</h2>
            { isLoggedIn ? <p>Welcome to our Application</p> : <p>Please Login</p> }
        </div>
    )
}

export default ConditionalRendering;