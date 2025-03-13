import React from "react"
import { useToast } from "./use-toast"
import { X } from "lucide-react"

export function Toaster() {
    const { toasts, removeToast } = useToast()

    return (
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className="flex items-center justify-between bg-white border border-gray-200 rounded shadow-md p-4 min-w-[200px]"
                >
                    <p className="text-sm text-gray-700">{toast.message}</p>
                    <button
                        className="ml-2 text-gray-400 hover:text-gray-600"
                        onClick={() => removeToast(toast.id)}
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            ))}
        </div>
    )
}
