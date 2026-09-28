import { useState } from "react";

function Input({ setFoodItems }) {

    const [inputVal, setInputVal] = useState("");

    const handleInput = (e) => {
        if (e.key === "Enter") {
            setFoodItems(prev => [...prev, e.target.value]);
            setInputVal("");
        }
    }

    return <input type="text" placeholder="Enter Food Item" className="p-4 border w-full" value={inputVal} onKeyDown={(e) => handleInput(e)} onChange={(e) => setInputVal(e.target.value)} />
}

export default Input;