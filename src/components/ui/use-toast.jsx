import { createContext, useContext, useState, useCallback } from "react"

const ToastContext = createContext()

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([])

    const addToast = useCallback((message, type = "success") => {
        const id = Date.now()
        setToasts((current) => [...current, { id, message, type }])

        // Auto-remove toast after 3 seconds
        setTimeout(() => {
            setToasts((current) => current.filter((toast) => toast.id !== id))
        }, 3000)
    }, [])

    const removeToast = useCallback((id) => {
        setToasts((current) => current.filter((toast) => toast.id !== id))
    }, [])

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
        </ToastContext.Provider>
    )
}

export function useToast() {
    return useContext(ToastContext)
}
