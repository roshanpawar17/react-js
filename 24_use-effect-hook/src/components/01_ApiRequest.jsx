import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function ApiRequest() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const usersCount = users?.length || 0;

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch(API_URL);

                if (!res.ok) {
                    throw new Error("Failed to fetch Users");
                }

                const data = await res.json();
                setUsers(data?.length > 0 ? data : []);

            } catch(err) {
                console.error('Error ', err.message);
                alert(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);


    if (loading) return <p>Loading...</p>

    return (
        <div>
            <h3>1. Empty Dependency Array: Api Request: Fetch Users</h3>
            {
                usersCount ? (
                    users.map((user) => (
                        user?.id && user?.name && (
                            <li key={user.id} style={{padding: "5px"}}>{user.name}</li>
                        )
                    ))
                ) : (
                    <p>No data found</p>
                )
            }
        </div>
    )
}
