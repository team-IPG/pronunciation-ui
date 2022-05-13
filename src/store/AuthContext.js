import React, { useState } from 'react'; 

const AuthContext = React.createContext(
    {
        isLoggedIn: false, 
        login: () => {}, 
        logout: () => {},
        setrole: () => {},
        role: ""
    }
);

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState(null); 
    
    const loginHandler = () => {
        setIsLoggedIn(true);
    }
    const logoutHandler = () => {
        setIsLoggedIn(false); 
    }
    const roleHandler = (_role) => {
        setRole(_role);
    }
    
    const contextValue = {
        isLoggedIn, 
        login: loginHandler, 
        logout: logoutHandler,
        setrole: roleHandler, 
        role
    }
    
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}; 

export default AuthContext;