import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import { AppRouter } from "./AppRouter";

export const PublicRoute = ( {children} ) => {

    const { user } = useContext( AppRouter );

    return user.logged
    ? <Navigate to='/'/>
    : children
}
