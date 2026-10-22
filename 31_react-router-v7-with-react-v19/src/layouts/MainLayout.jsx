import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div>
            <h1>Router App</h1>
            <Outlet />
        </div>
    )
}