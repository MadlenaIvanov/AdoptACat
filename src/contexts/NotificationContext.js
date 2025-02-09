import { createContext, useCallback, useState, useContext } from "react";

export const NotificationContext = createContext();

export const types = {
    error: 'Danger',
    warning: 'Warning',
    info: 'Info',
    success: 'Success',
}

const initialNotificationState = { show: false, message: '', type: types.error }

export const NotificationProvider = ({
    children
}) => {
    const [notification, setNotification] = useState(initialNotificationState)

    const addNotification = useCallback((message, type = types.error) => {
        setNotification({show: true, message, type});

        setTimeout(() => {
            setNotification(initialNotificationState)
        }, 3000);
    }, []);

    const hideNotification = useCallback(() => setNotification(initialNotificationState), [])

    return(
        <NotificationContext.Provider value={{notification, addNotification, hideNotification}}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotificationContext = () => {
    const state = useContext(NotificationContext);

    return state;
}