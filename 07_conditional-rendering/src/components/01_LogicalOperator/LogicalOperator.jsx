const LogicalOperator = () => {

    const isLoggedIn = true;

    return (
        <>
            <h2>1. Logical Operator</h2>

            { isLoggedIn && <p>You are logged in.</p> }
        </>
    )
}

export default LogicalOperator;