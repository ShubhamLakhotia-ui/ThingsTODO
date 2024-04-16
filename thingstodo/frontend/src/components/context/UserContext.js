import React, { createContext, useContext, useState } from 'react';

// Create the context
const UserContext = createContext(null);

// Provide the context
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData)); // Optionally store user data in localStorage
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user'); // Clear user data from localStorage
    };

    const isAdmin = user ? user.isAdmin : false;

    return (
        <UserContext.Provider value={{ user, isAdmin, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the context
export const useUser = () => useContext(UserContext);
