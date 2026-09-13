const IfElseStatement = () => {

    const isLoggedIn = false;

    let message = '';

    if (isLoggedIn) {
        message = 'Welcome to Application';
    } else {
        message = 'Please Login';
    }

    return (
        <>
            <h2>3. If-Else Statement</h2>
            <p>{ message }</p>
        </>
    )
}

export default IfElseStatement;