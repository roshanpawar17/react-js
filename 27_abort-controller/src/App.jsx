import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [users, setUsers] = useState([]);
  const controllerRef = useRef(null);

  const fetchUsers = async () => {

    // Cancel the previous request if it is still active
    controllerRef.current?.abort();

    // Create a fresh controller for this request
    const controller = new AbortController();
    controllerRef.current = controller;

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        signal: controllerRef.current.signal
      });

      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await res.json();
      setUsers(data);

    } catch (err) {
      if (err.name === "AbortError") {
        console.log("Request cancelled");
      } else {
        console.log("Error ", err);
      }
    }

    console.log('isAborted ', controllerRef.current.signal.aborted);
  }

  useEffect(() => {
    fetchUsers();

    return () => {
      console.log('Cleanup')
      controllerRef.current.abort();
    }
  }, []);

  console.log('Component Rendered');

  return (
    <>
      <h2>AbortController</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={() => fetchUsers()}>Fetch Users</button>
    </>
  )
}

export default App;
