import { useCounter } from "../hooks/useCounter";

function ComponentA() {

    const { count, increment, decrement } = useCounter();

    return (
        <div>
            <h2>Component A</h2>
            <div>
                <p>Count: {count}</p>

                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    )
}

export default ComponentA;