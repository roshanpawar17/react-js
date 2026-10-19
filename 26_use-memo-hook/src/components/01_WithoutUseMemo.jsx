import React, { useState } from 'react'

export default function WithoutUseMemo() {

    const [count, setCount] = useState(0);

    const result = calculateSum();

    function calculateSum() {
        console.time("myTimer");
        console.log("Calculating...");

        let total = 0;
 
        for (let i = 0; i < 1000000000; i++) {
            total += i;
        }

        console.log("Calculation Finish");
        console.timeEnd("myTimer");

        return total;
    }

    return (
        <div>
            <h2>1. Without UseMemo</h2>
            <div>
                <h2>Count: {count}</h2>
                <h3>Sum: {result}</h3>

                <button onClick={() => setCount(count + 1)}>
                    Increment
                </button>
            </div>
        </div>
    )
}
