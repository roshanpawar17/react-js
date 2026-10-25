import { useState } from "react";
import z from "zod";

const registrationSchema = z.object({
    username: z.string().nonempty("Username is required").trim(),
    password: z.string().nonempty("Password is required").min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string().nonempty("Confirm Password is required").min(6, "Confirm Password must be at least 6 characters long"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

type RegistrationFormType = z.infer<typeof registrationSchema>;

export default function CustomValidation() {

    const [form, setForm] = useState<RegistrationFormType>({
        username: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormType, string>>>({});
    const [success, setSuccess] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: ""
        });

        setSuccess("");
    };

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSuccess("");

        const result = registrationSchema.safeParse(form);
        console.log("Validation result:", result);

        if (!result?.success) {
            const newErrors: Partial<Record<keyof RegistrationFormType, string>> = {};

            result.error.issues.forEach((issue) => {
                newErrors[issue.path[0] as keyof RegistrationFormType] = issue.message;
            });

            setErrors(newErrors);
            return;
        }

        setErrors({});
        setSuccess("Registration successful!");

        console.log("Valid registration data:", result.data);
    }

    return (
        <div>
            <h2>4. Custom Validation with refine</h2>
            <form onSubmit={handleSubmit}>
                <h4>Registration Form</h4>
                <div>
                    <label>Username</label> &nbsp;
                    <input
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                    {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                </div>
                <br />
                <div>
                    <label>Password</label>  &nbsp;
                    <input
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>
                <br />
                <div>
                    <label>Confirm Password</label>  &nbsp;
                    <input
                        name="confirmPassword"
                        type="password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                    />
                    {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
                </div>
                <br />
                <button type="submit">Register</button>
                { success && <p>{success}</p> }
            </form>
        </div>
    )
}
