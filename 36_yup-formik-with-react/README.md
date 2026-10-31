#### Formik + Yup with React

> Formik and Yup are commonly used together in React to handle form management and form validation.

- Formik: Manages form state, handles input changes, form submission, and validation errors.
- Yup: Defines validation rules for form fields, such as required fields, email format, minimum length, etc.

-----

1) What is Formik?

1. Formik is a React library that simplifies handling forms.

2. Without Formik, you generally need to manage:

- Input values using useState.
- Input changes using onChange.
- Form submission using onSubmit.
- Validation errors.
- Form touched state.

3. Formik handles most of this for you.

Property	            Description

1. initialValues	    - Initial form field values
2. values	            - Current form values
3. handleChange	        - Handles input changes
4. handleBlur	        - Tracks when a field loses focus
5. handleSubmit	        - Handles form submission
6. errors	            - Stores validation errors
7. touched	            - Tracks fields that users have interacted with
8. isSubmitting	        - Indicates form submission status
9. resetForm()	        - Resets the form

------

2) What is Yup?

1. Yup is a JavaScript schema validation library.

2. You define validation rules using a schema.

import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Minimum 3 characters required"),

  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

3. Here:

- Yup.object() creates an object schema.
- Yup.string() validates a string.
- .required() makes a field mandatory.
- .min() specifies minimum length.
- .email() validates email format.

4. Here are some commonly used Yup validation methods.

Method	            Purpose	                    Example

1. required()	    - Required field	         - .required()
2. min()	        - Minimum length	         - .min(3)
3. max()	        - Maximum length	         - .max(20)
4. email()	        - Email validation	         - .email()
5. matches()	    - Regex validation	         - .matches(/^[a-z]+$/)
6. oneOf()	        - Match specific values	     - .oneOf(["A", "B"])
7. ref()	        - Reference another field	 -  Yup.ref("password")
8. test()	        - Custom validation	         - .test(...)
9. when()	        - Conditional validation	 - .when(...)
10. nullable()	    - Allow null	             - .nullable()

5. Custom validation using Yup .test()

const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .test(
      "valid-username",
      "Only letters, numbers and underscores allowed",
      (value) => /^[a-zA-Z0-9_]+$/.test(value || "")
    ),
});

Here:

- test() accepts a custom validation rule.
- First argument: Validation rule name.
- Second argument: Error message.
- Third argument: Validation function.

------

3) How does formik.getFieldProps() work?

1. 

const { values, handleChange, handleBlur, handleSubmit, isSubmitting, touched, errors, getFieldProps } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onFormSubmit
});

<input
  type="text"
  name="firstName"
  {...getFieldProps("firstName")}
/>

2. This is a shortcut for writing:

<input
  type="text"
  value={values.firstName}
  onChange={handleChange}
  onBlur={handleBlur}
/>

3. getFieldProps() automatically provides:

- name
- value
- onChange
- onBlur
