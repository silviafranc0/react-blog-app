import React, { useState } from 'react';
import AuthContext from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        if (username.trim() && password.trim()) {
            setUser({ username });
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{
            user, 
            login, 
            logout
        }}
        >
        {children}
        </AuthContext.Provider>
    );
};