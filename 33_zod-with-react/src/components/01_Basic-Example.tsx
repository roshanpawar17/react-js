import { useState } from "react";
import { z } from "zod";

// 1. Define the schema
const usernameSchema = z.string()
    .nonempty("Username is required")
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username must be at most 20 characters long" })
    .regex(/^[a-zA-Z0-9_]+$/, { message: "Username can only contain letters, numbers, and underscores" });

export default function BasicExample() {

    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result = usernameSchema.safeParse(username);
        console.log('result ', result);

        if (result.success) {
            setMessage('Username is valid!');
        } else {
            setMessage(result.error.issues[0].message);
        }
    }

    return (
        <div>
            <h2>1. Basic-Example</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label><br /><br />
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    id="username"
                />
                <br /><br />
                <button type="submit">Submit</button>

                <p>{message}</p>
            </form>
        </div>
    )
}
