#### What is Zod ?

> Zod is a JavaScript and TypeScript library used to validate data and check whether it follows the rules you define. It is especially useful when working with React forms, API responses, login forms, registration forms, and user input.

-> Let's understand it step by step with practical React examples.

1) What is Zod?

1. Suppose you create a React registration form with these fields:

- Name — required
- Email — must be a valid email address
- Age — must be at least 18
- Password — must contain at least 8 characters

2. You need to check whether the entered values satisfy these rules before submitting the form.

3. You could write all the validation logic manually, but Zod lets you define these rules in a schema.

4. Important Zod concepts

Concept	                Meaning

i.    z	                  - The main object used to define validation rules.
ii.   Schema	              - A collection of validation rules for your data.
iii.  z.string()	          - Checks that a value is a string.
iv.   z.number()	          - Checks that a value is a number.
v.    z.object()	          - Defines rules for an object and its properties.
vi.   min()	              - Defines a minimum length or numeric value, depending on the schema type.
vii.  email()	            - Checks that a string is a valid email address.
viii. parse()	            - Validates data and throws a ZodError if validation fails.
ix.   safeParse()	        - Validates data and returns a success or failure result without throwing a validation error.


------

2) type RegistrationFormType = z.infer<typeof registrationSchema>;

1. This line automatically creates a TypeScript type from your Zod schema.
2. Suppose you have this Zod schema:

import { z } from "zod";

const registrationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number(),
  password: z.string().min(8),
});

3. Normally, you could manually define a TypeScript type like this:

type RegistrationFormType = {
  name: string;
  email: string;
  age: number;
  password: string;
};

4. But this creates duplicate code. If you change your schema, you must remember to update your type too.

Instead, write:

type RegistrationFormType = z.infer<typeof registrationSchema>;

5. TypeScript automatically infers the type from the schema.

The resulting type is equivalent to:

type RegistrationFormType = {
  name: string;
  email: string;
  age: number;
  password: string;
};

------

3) const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormType, string>>>({});

Let's break it down from the inside out.

1. Step 1: keyof RegistrationFormType

- Given this type:

type RegistrationFormType = {
  name: string;
  email: string;
  age: number;
  password: string;
};

- keyof RegistrationFormType produces a union of the field names:

type FormFieldNames = "name" | "email" | "age" | "password";

2. Step 2: Record<keyof RegistrationFormType, string>

- Record creates an object type with specified keys and value types.

Record<keyof RegistrationFormType, string>

- This is equivalent to:

type Errors = {
  name: string;
  email: string;
  age: string;
  password: string;
};

- Notice that all four fields are required in this version, even if no errors exist.

3. Step 3: Partial<Record<keyof RegistrationFormType, string>>

- Partial makes all those properties optional.

Partial<Record<keyof RegistrationFormType, string>>

- Now the type is equivalent to:

type Errors = {
  name?: string;
  email?: string;
  age?: string;
  password?: string;
};

- This is useful because a user might have an error for only one field.

- For example, all of these are valid:

const errors1 = {};

const errors2 = {
  name: "Name is required",
};

const errors3 = {
  email: "Invalid email address",
  password: "Password must be at least 8 characters",
};

-------

4) Bonus — Useful Zod methods

Method	            Example	                        Purpose

1.  .min()	        - z.string().min(3)	            - Minimum string length
2.  .max()	        - z.string().max(50)	          - Maximum string length
3.  .email()	      - z.string().email()	          - Validate email format
4.  .optional()	    - z.string().optional()	        - Allow undefined
5.  .nullable()	    - z.string().nullable()	        - Allow null
6.  .regex()	      - z.string().regex(/^[0-9]+$/)	- Validate a pattern
7.  .safeParse()	  - schema.safeParse(data)	      - Validate without throwing
8.  .parse()	      - schema.parse(data)	          - Validate and throw on failure
9.  .refine()	      - z.string().refine(...)	      - Add a custom validation rule
10. .transform()	  - z.string().transform(...)	    - Transform validated data