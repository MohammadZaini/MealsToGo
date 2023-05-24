import React, { useState, createContext } from "react";
import { loginRequest } from "./authentication.service";
import { createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "@firebase/auth";
import { auth } from "../../../firebase-config";

export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    onAuthStateChanged(auth, (usr) => {
        if (usr) {
            setUser(usr);
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    });

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(email, password)
            .then((u) => {
                setUser(u);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e.toString());
            });
    };

    const onRegister = (email, password, repeatedPassword) => {
        if (password !== repeatedPassword) {
            setError("Passwords do not match")
        };
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((u) => {
                setUser(u);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e.toString());
            });
    };

    const onLogout = () => {
        setUser(null);
        signOut(auth);
    }

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                isLoading,
                user,
                error,
                onLogin,
                onRegister,
                onLogout,
            }}
        >{children}</AuthenticationContext.Provider>
    )
}
