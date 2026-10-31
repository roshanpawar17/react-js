import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    country: "India",
    state: "",
    city: "",
    address: "",
    pincode: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
};

// 1. Yup Validation Schema
const validationSchema = Yup.object({

    firstName: Yup.string()
        .trim()
        .required("First name is required")
        .min(2, "Minimum 2 characters required"),

    lastName: Yup.string()
        .trim()
        .required("Last name is required")
        .min(2, "Minimum 2 characters required"),

    username: Yup.string()
        .trim()
        .required("Username is required")
        .min(3, "Minimum 3 characters required")
        .max(20, "Maximum 20 characters allowed")
        .matches(
            /^[a-zA-Z0-9_]+$/,
            "Only letters, numbers and underscores allowed"
        ),

    email: Yup.string()
        .trim()
        .required("Email is required")
        .email("Invalid email address"),

    phone: Yup.string()
        .required("Phone number is required")
        .matches(
            /^[6-9]\d{9}$/,
            "Enter a valid 10-digit Indian mobile number"
        ),

    dateOfBirth: Yup.date()
        .typeError("Please select a valid date of birth")
        .required("Date of birth is required")
        .max(new Date(), "Date of birth cannot be in the future")
        .test(
            "minimum-age",
            "You must be at least 18 years old",
            (value) => {
                if (!value || isNaN(value.getTime())) return false;

                const today = new Date();
                const minimumDate = new Date(
                    today.getFullYear() - 18,
                    today.getMonth(),
                    today.getDate()
                );

                return value <= minimumDate;
            }
        ),

    gender: Yup.string()
        .required("Please select your gender"),

    country: Yup.string()
        .required("Country is required"),

    state: Yup.string()
        .trim()
        .required("State is required"),

    city: Yup.string()
        .trim()
        .required("City is required"),

    address: Yup.string()
        .trim()
        .required("Address is required")
        .min(10, "Address must be at least 10 characters"),

    pincode: Yup.string()
        .required("Pincode is required")
        .matches(/^\d{6}$/, "Enter a valid 6-digit pincode"),

    password: Yup.string()
        .required("Password is required")
        .min(8, "Minimum 8 characters required")
        .matches(/[A-Z]/, "At least one uppercase letter required")
        .matches(/[a-z]/, "At least one lowercase letter required")
        .matches(/\d/, "At least one number required")
        .matches(
            /[!@#$%^&*(),.?":{}|<>]/,
            "At least one special character required"
        ),

    confirmPassword: Yup.string()
        .required("Please confirm your password")
        .oneOf(
            [Yup.ref("password")],
            "Passwords do not match"
        ),

    acceptTerms: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions"),
});

export default function RegistrationWithUseFormik() {

    // 2. Formik Configuration
    const { values, handleChange, handleBlur, handleSubmit, isSubmitting, touched, errors, getFieldProps } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onFormSubmit
    });

    function onFormSubmit(values, { resetForm }) {

        // Remove confirmPassword and acceptTerms from API payload
        const { confirmPassword, acceptTerms, ...payload } = values;
        console.log("Registration Payload:", payload);

        try {
            // Replace this with your actual registration API
            // await axios.post("/api/register", payload);

            alert("Registration successful!");

            resetForm();

        } catch (error) {
            console.error("Registration failed:", error);
            alert("Something went wrong!");
        }
    }

    // 3. Reusable Error Component
    const showError = (field) => {
        return (
            touched[field] &&
            errors[field] && (
                <small className="error">
                    {errors[field]}
                </small>
            )
        );
    };

    // 4. Reusable Input Component
    const renderInput = (name, label, type = "text", placeholder = "") => (
        <div className="form-group">
            <label htmlFor={name}>
                <span>{label}</span>
                <span className="mandatory">*</span>
            </label>

            <input
                id={name}
                type={type}
                placeholder={placeholder}
                {...getFieldProps(name)}
            />

            {showError(name)}
        </div>
    );

    return (
        <div>
            <h2>1. Registration with useFormik</h2>
            <form onSubmit={handleSubmit}>

                {/* Personal Information */}
                <h3>Personal Information</h3>

                <div className="form-grid">

                    {renderInput("firstName", "First Name", "text", "Enter first name")}

                    {renderInput("lastName", "Last Name", "text", "Enter last name")}

                    {renderInput("username", "Username", "text", "Enter username")}

                    {renderInput("email", "Email Address", "email", "Enter email")}

                    {renderInput("phone", "Phone Number", "tel", "Enter mobile number")}

                    {renderInput("dateOfBirth", "Date of Birth", "date")}

                    {/* Gender */}
                    <div className="form-group">
                        <label htmlFor="gender">
                            <span>Gender</span>
                            <span className="mandatory">*</span>
                        </label>

                        <select
                            id="gender"
                            {...getFieldProps("gender")}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="prefer_not_to_say">Prefer not to say</option>
                        </select>

                        {showError("gender")}
                    </div>

                </div>


                {/* Address Information */}
                <h3>Address Information</h3>

                <div className="form-grid">

                    {/* Country */}
                    <div className="form-group">
                        <label htmlFor="country">
                            <span>Country</span>
                            <span className="mandatory">*</span>
                        </label>

                        <select
                            id="country"
                            {...getFieldProps("country")}
                        >
                            <option value="">Select Country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Canada">Canada</option>
                        </select>

                        {showError("country")}
                    </div>

                    {renderInput("state", "State", "text", "Enter state")}

                    {renderInput("city", "City", "text", "Enter city")}

                    {renderInput("pincode", "Pincode", "text", "Enter pincode")}

                </div>

                <div className="form-group">
                    <label htmlFor="address">
                        <span>Full Address</span>
                        <span className="mandatory">*</span>
                    </label>

                    <textarea
                        id="address"
                        rows="3"
                        placeholder="Enter your complete address"
                        {...getFieldProps("address")}
                    />

                    {showError("address")}
                </div>


                {/* Account Security */}
                <h3>Account Security</h3>

                <div className="form-grid">

                    {renderInput("password", "Password", "password", "Enter password")}

                    {renderInput(
                        "confirmPassword",
                        "Confirm Password",
                        "password",
                        "Re-enter password"
                    )}

                </div>


                {/* Terms & Conditions */}
                <div className="terms-group">

                    <label>
                        <input
                            type="checkbox"
                            name="acceptTerms"
                            checked={values.acceptTerms}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        I accept the Terms & Conditions and Privacy Policy.
                    </label>

                    {showError("acceptTerms")}

                </div>


                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Registering..." : "Create Account"}
                </button>

            </form>
        </div>
    )
}