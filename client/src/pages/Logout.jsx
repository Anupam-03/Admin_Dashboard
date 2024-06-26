import { useEffect } from "react";
import { useAuth } from "../store/auth";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Logout = () => {
    const { LogoutUser } = useAuth();

    useEffect(() => {
        LogoutUser();
        // toast.info("Logout User");
    }, [LogoutUser]);

    return <Navigate to="/login" />
}
