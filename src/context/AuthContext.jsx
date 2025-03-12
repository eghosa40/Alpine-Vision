// import { createContext, useState, useContext, useMemo, useEffect } from "react";
//
// const AuthContext = createContext();
//
// export function AuthProvider({ children }) {
//     // Lazy initialize state from localStorage
//     const [user, setUser] = useState(() => {
//         const storedUser = localStorage.getItem("user");
//         return storedUser ? JSON.parse(storedUser) : null;
//     });
//
//     // Function to manually change roles
//     const setRole = (role) => {
//         if (!user) return; // Prevent setting role if no user is logged in
//         const updatedUser = { ...user, role };
//         setUser(updatedUser);
//         localStorage.setItem("user", JSON.stringify(updatedUser));
//         console.log("User role updated:", updatedUser);
//     };
//
//     const login = (role) => {
//         const newUser = { name: "Test User", role };
//         setUser(newUser);
//         localStorage.setItem("user", JSON.stringify(newUser));
//         console.log("User logged in:", newUser);
//     };
//
//     const logout = () => {
//         setUser(null);
//         localStorage.removeItem("user");
//         console.log("User logged out");
//     };
//
//     // Attach to window for debugging
//     useEffect(() => {
//         window.auth = { setRole, login, logout };
//         console.log("Auth functions added to window.auth");
//     }, []);
//
//     // Memoize the context value
//     const value = useMemo(() => ({ user, login, logout, setRole }), [user]);
//
//     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }
//
// export function useAuth() {
//     return useContext(AuthContext);
// }

"use client"
import { createContext, useContext, useState, useEffect } from "react"

// Create the auth context
const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)

    // Check if user is already logged in (on page load/refresh)
    useEffect(() => {
        const storedToken = localStorage.getItem("token")
        const storedUser = localStorage.getItem("user")

        if (storedToken && storedUser) {
            setToken(storedToken)
            setCurrentUser(JSON.parse(storedUser))
        }

        setLoading(false)
    }, [])

    // Login function
    const login = (newToken, user) => {
        setToken(newToken)
        setCurrentUser(user)
    }

    // Logout function
    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setToken(null)
        setCurrentUser(null)
    }

    // Check if user is authenticated
    const isAuthenticated = () => {
        return !!token
    }

    // Check if user is admin
    const isAdmin = () => {
        return currentUser?.role === "admin"
    }

    const value = {
        currentUser,
        token,
        loading,
        login,
        logout,
        isAuthenticated,
        isAdmin,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Custom hook to use the auth context
export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}



