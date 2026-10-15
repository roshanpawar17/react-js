import { useEffect, useState } from "react";

function InfiniteLoop() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        // setCount(count + 1);
    }, [count]);

    return (
        <div>
            <h3>3. Infinite Loop Eg.</h3>
            <p>{count}</p>
        </div>
    )
}

export default InfiniteLoop;