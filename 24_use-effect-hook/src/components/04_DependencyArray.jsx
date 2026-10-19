import { useEffect, useState } from "react";


function DependencyArray() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Effect Executed');
    }, [count]);

    return (
        <div>
            <h3>4. Dependency Array</h3>
            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>
        </div>
    )
}

export default DependencyArray;