import { memo } from "react";

const Child = memo(function Child({ onClick }) {

    console.log("Child rendered");

    return (
        <div>
            <br />
            <div>Child</div>
            <br />
            <button onClick={onClick}>Child Button</button>
        </div>
    )
});

export default Child;
