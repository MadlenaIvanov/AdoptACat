import { useNavigate } from "react-router-dom";
import * as authService from '../../services/authService'

// import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";

import { useAuthContext } from "../../contexts/AuthContext";
import { useNotificationContext, types } from '../../contexts/NotificationContext.js';


const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuthContext()
    const { addNotification } = useNotificationContext()


    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                navigate('/dashboard');
                addNotification('Successfully logged out', types.success) 
            });
    }, []);


    // onLogout();

    return null;
}

export default Logout;