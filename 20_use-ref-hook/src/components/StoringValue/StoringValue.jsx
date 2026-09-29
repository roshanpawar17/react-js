import { useRef, useState } from "react";

function StoringValue() {

    const countRef = useRef(0);
    const [count, setCount] = useState(0);
    
    const updateState = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const updateRef = () => {
        countRef.current += 1;
        console.log('CountRef ', countRef);
    }

    console.log('Re-Render');

    return (
        <div>
            <h3>2. Storing a value without causing re-renders</h3>
            <h4>State: {count}</h4>
            <h4>Ref: {countRef.current}</h4> {/* When I update state then updated the ref value in UI */}
            <button onClick={updateRef}>Update Ref</button>
            <button onClick={updateState}>Update State</button>
        </div>
    )
}

export default StoringValue;