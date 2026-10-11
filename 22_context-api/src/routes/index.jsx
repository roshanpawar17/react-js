import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Dashboard from "../pages/dashborad/Dashborad";
import ProtectedRoute from './ProtectedRoute';
import { Suspense } from 'react';
import MainLayout from '../layouts/MainLayout';

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: "/",
        element: <ProtectedRoute />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        path: "/",
                        element: <Navigate to="/dashboard" replace />
                    },
                    {
                        path: "/dashboard",
                        element: (
                            <Suspense fallback="Loading...">
                                <Dashboard />
                            </Suspense>
                        )
                    }
                ]
            }

        ]
    },
    {
        path: '*',
        element: <Navigate to="/login" replace />
    }
]);

export function AppRouter() {
    return <RouterProvider router={router}></RouterProvider>
}