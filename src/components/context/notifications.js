import React, { createContext, useReducer } from 'react';
import { notifications } from '../reducers/notification';

export const NotificationContext = createContext();

const NotificationContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(notifications, '');

    return (
        <NotificationContext.Provider value={{ dispatch }}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContextProvider;