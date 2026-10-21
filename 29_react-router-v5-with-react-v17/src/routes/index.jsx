import { BrowserRouter } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { ProtectedRoute } from "./ProtectedRoute";
import Users from "../pages/Users";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                <ProtectedRoute exact path="/users" component={Users} />

                {/* Default Route */}
                <Route exact path="/" render={() => <Redirect to="/dashboard" />} />

                {/* Unknown routes */}
                <Route render={() => <Redirect to="/" />} />
            </Switch>
        </BrowserRouter>
    )
} 