// src/components/ui/sidebar.jsx
import React, { useState } from "react";
import { cn } from "src/lib/utils";
import { Menu, X, Home, PlusCircle, Package, Edit3, Trash2 } from "lucide-react";

// Sidebar menu button component
function SidebarMenuButton({ label, icon: Icon, active, collapsed, onClick }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex items-center gap-2 w-full px-4 py-2 text-left transition-colors hover:bg-gray-100 focus:outline-none",
                active
                    ? "font-semibold border-l-4 border-black bg-gray-100"
                    : "border-l-4 border-transparent"
            )}
        >
            {Icon && <Icon className="h-4 w-4" />}
            {!collapsed && <span>{label}</span>}
        </button>
    );
}

export function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState("Dashboard");

    const menuItems = [
        { label: "Dashboard", icon: Home },
        { label: "Add Product", icon: PlusCircle },
        { label: "Products", icon: Package },
        { label: "Edit Product", icon: Edit3 },
        { label: "Delete Products", icon: Trash2 },
    ];

    return (
        <aside
            className={cn(
                "h-screen bg-gray-50 border-r border-gray-200 flex flex-col",
                collapsed ? "w-16" : "w-64"
            )}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                {!collapsed && <span className="font-bold text-black">Admin</span>}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="text-gray-600 hover:text-black focus:outline-none"
                >
                    {collapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
                </button>
            </div>

            {/* Sidebar Content */}
            <SidebarContent>
                <nav className="flex-1 py-4 space-y-1">
                    {menuItems.map((item) => (
                        <SidebarMenuButton
                            key={item.label}
                            label={item.label}
                            icon={item.icon}
                            active={activeItem === item.label}
                            collapsed={collapsed}
                            onClick={() => setActiveItem(item.label)}
                        />
                    ))}
                </nav>
            </SidebarContent>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                    {!collapsed && "© 2025 Alpine Vision"}
                </p>
            </div>
        </aside>
    );
}

// New component: SidebarContent
export function SidebarContent({ children, className, ...props }) {
    return (
        <div className={cn("flex-1 p-4", className)} {...props}>
            {children}
        </div>
    );
}

