import { useEffect, useState } from 'react'

function WithoutDependencyArray() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Effect executed");
    }); // No dependency array

    console.log("Component rendered");

    return (
        <div>
            <h3>5. Without Dependency Array</h3>
            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>
        </div>
    )
}

export default WithoutDependencyArray;