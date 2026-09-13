export const TernaryOperator = () => {

    const isLoggedIn = true;

    return (
        <>
            <h2>2. Ternary Operator</h2>
            {
                isLoggedIn ? <p>Welcome to Application</p> : <p>Please Login</p>
            }
        </>
    )
}