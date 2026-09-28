function WithLocalVarible() {

  let count = 0;
  console.log('Comonent Rerender Count (WithLoaclVariable) ', count);

  const increamentCount = () => {
    count++;
    console.log("Function Increament (WithLoaclVariable) ", count);
  }

  return (
    <div className="flex flex-col gap-4 items-start p-4">
      <h2>1. With Local Variable</h2>
      <p>Count: {count}</p>
      <button className="bg-blue-400 p-2 text-white" onClick={increamentCount}>Increament</button>
    </div>
  )
}

export default WithLocalVarible;
