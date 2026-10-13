import { useReducer } from "react"

function counterReducer(state, action) {
    switch(action.type) {
        case "INCREMENT": 
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return 0;
        case "INCREMENT_BY": 
            return state + action.payload;
        default:
            return state;
    }
}

export default function Counter() {

    const [count, dispatch] = useReducer(counterReducer, 0);
    
    return (
        <div style={{
            width: "20rem", 
            height: "20vh", 
            border: "1px solid black,",
            textAlign: "center"
        }}>
            <h2>Counter App Preview</h2>
            <div>
                <h3>{count}</h3>
                <div>
                    <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
                    <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
                    <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
                    <button onClick={() => dispatch({ type: "INCREMENT_BY", payload: 5 })}>+5</button>
                </div>
            </div>
        </div>
    )
}
