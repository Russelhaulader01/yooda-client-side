import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const AllAuth = useFirebase()
    return (
        <AuthContext.Provider value={AllAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;