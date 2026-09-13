function JsObject() {

    const user = {
        name: "Roshan",
        age: 23
    }

    return (
        <div>
            <h2>5. JS Object</h2>
            <p>Name: { user?.name }</p>
            <p>Age: { user?.age }</p>
        </div>
    )
}

export default JsObject;