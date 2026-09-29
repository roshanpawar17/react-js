import { useRef } from "react";

function AccessingDOMElement() {

    const nameInput = useRef();

    const handleOnClick = () => {
        console.log('Name Input ', nameInput);
        nameInput.current.focus();
    } 

    return (
        <div>
            <h3>1. Accessing a DOM element</h3>
            <input type="text" placeholder="Enter Name" ref={nameInput} />
            <button onClick={handleOnClick}>Focus Input</button>
        </div>
    )
}

export default AccessingDOMElement;