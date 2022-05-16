import React, { useState, useEffect } from 'react'; 

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

    useEffect(() => {
        let _auth = localStorage.getItem("token");
        if(_auth){
            setIsLoggedIn(true);
        }
    },[])
    
    const loginHandler = () => {
        setIsLoggedIn(true);
        localStorage.setItem("token", "authorized"); 
    }
    const logoutHandler = () => {
        setIsLoggedIn(false); 
        localStorage.removeItem("token");
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