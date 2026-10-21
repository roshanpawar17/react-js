import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = Boolean(localStorage.getItem('isLoggedIn'));

    return (
        <Route {...rest} render={(props) => isAuthenticated ? (
            <Component  {...props} />
        ) : (
            // <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
            <Redirect to="/login" />
        )} />
    )
}