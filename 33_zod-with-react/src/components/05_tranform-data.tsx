import React, { useState } from "react";
import { z } from "zod";

const emailSchema = z.string().nonempty("Email is required").trim().email("Invalid Email").transform(val => val.toLowerCase());

export default function TransformData() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [result, setResult] = useState("");

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result = emailSchema.safeParse(email);
        if (!result.success) {
            setError(result.error.issues[0].message);
            setResult("");
        } else {
            setError("");
            setResult(result.data);
        }
    }

    return (
        <>
            <h2>5. Transform Data</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Normalization</label> &nbsp;

                <input
                    type="text"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                        setResult("");
                    }}
                    placeholder="Enter email"
                    id="email"
                />

                &nbsp;

                <button type="submit">Submit</button>

                {error && <p style={{ color: "red" }}>{error}</p>}

                {result && (
                    <p style={{ color: "green" }}>
                        Normalized email: {result}
                    </p>
                )}
                
            </form>
        </>
    )
}