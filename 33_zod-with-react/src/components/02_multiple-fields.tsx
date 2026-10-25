import { useState } from "react";
import { z } from "zod";

const registrationSchema = z.object({
    name: z.string().nonempty("Name is required").trim(),
    email: z.string().nonempty("Email is required").email("Invalid email address"),
    age: z.number().int().positive("Age must be a positive integer").max(120, "Age must be less than or equal to 120"),
    password: z.string().nonempty("Password is required").min(6, "Password must be at least 6 characters long"),
});

type RegistrationFormType = z.infer<typeof registrationSchema>;

export default function MultipleFields() {

    const [form, setForm] = useState<RegistrationFormType>({
        name: "",
        email: "",
        age: 0,
        password: "",
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

        const result = registrationSchema.safeParse({
            ...form,
            age: Number(form.age) // Convert age to number for validation
        });
        console.log('result ', result);

        if (!result.success) {
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
    };

    return (
        <div>
            <h2>2. Multiple Fields</h2>
            <form onSubmit={handleSubmit}>
                <h4>Registration Form</h4>

                <div>
                    <label>Name</label> &nbsp;
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </div>

                <br />

                <div>
                    <label>Email</label> &nbsp;
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>

                <br />

                <div>
                    <label>Age</label>  &nbsp;
                    <input
                        name="age"
                        type="number"
                        value={form.age}
                        onChange={handleChange}
                        placeholder="Enter your age"
                    />
                    {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
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

                <button type="submit">Register</button>

                {success && <p>{success}</p>}
            </form>
        </div>
    )
}

