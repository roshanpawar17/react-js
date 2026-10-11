import { api } from "./api.interceptor";

export const loginUser = async (data) => {
    try {
        const res = await api.post("/login", data);
        return res;
    } catch (err) {
        // throw new Error(err?.message || "Login failed. Please try again.");

        // hardcoded response for testing
        return {
            success: true,
            data: [{
                name: "Roshan Pawar",
                id: 151,
                role: "Super Admin",
                token: "iwskkdhdhdjdkdkdk"
            }]
        }
    }
}

export const logoutUser = async () => {
    try {
        const res = await api.post("/logout", {});
        return res;
    } catch (err) {
        // throw new Error(err?.message || "Logout failed. Please try again.");

        // hardcoded response for testing
        return {
            success: true,
            message: "Logout successfully"
        }
    }
}