// src/components/ui/tabs.jsx
import React from "react";
import { cn } from "src/lib/utils";

export function Tabs({ tabs, activeTab, onTabChange }) {
    return (
        <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={cn(
                        "px-4 py-2 text-sm font-medium transition-colors",
                        activeTab === tab
                            ? "border-b-2 border-black text-black"
                            : "text-gray-500 hover:text-black"
                    )}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}

// Add a container for the tab content
export function TabsContent({ children, className, ...props }) {
    return (
        <div className={cn("mt-4", className)} {...props}>
            {children}
        </div>
    );
}

