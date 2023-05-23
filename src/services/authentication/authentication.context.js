import React, { useState, createContext } from "react";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const onLogin = (email, password) => {
        setIsLoading(true)
        loginRequest(email, password)
            .then((user) => {
                setUser(user);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err)
            })
    }

    return (
        <AuthenticationContext.Provider
            value={{}}
        >{children}</AuthenticationContext.Provider>
    )
}
