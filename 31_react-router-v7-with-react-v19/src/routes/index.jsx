import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

import NotFound from "../components/NotFound";

import MainLayout from "../layouts/MainLayout";

import { ProtectedRoute } from "./ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/login",
        element: <Login />
    },
    // Protected routes
    {
        element: <ProtectedRoute />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        path: "/",
                        element: <Navigate to="/dashboard" />
                    },
                    {
                        path: "/dashboard",
                        element: <Dashboard />
                    },
                    {
                        path: "/profile",
                        element: <Profile />
                    }
                ]
            }
        ]
    },
    // Catch-all route
    {
        path: "*",
        element: <NotFound />
    }
]);

export function AppRouter() {
    return <RouterProvider router={router} />
}