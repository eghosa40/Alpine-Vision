// src/components/ui/alert-dialog.jsx
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import React from "react";
import { cn } from "src/lib/utils";

// Export the root and trigger directly
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

// Portal for proper layering
const AlertDialogPortal = AlertDialogPrimitive.Portal;

// Overlay with a semi-transparent background
const AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Overlay
        ref={ref}
        className={cn("fixed inset-0 bg-black/50", className)}
        {...props}
    />
));
AlertDialogOverlay.displayName = "AlertDialogOverlay";

// Content container for the dialog
const AlertDialogContent = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Content
        ref={ref}
        className={cn(
            "fixed top-1/2 left-1/2 max-w-md w-full -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg",
            className
        )}
        {...props}
    />
));
AlertDialogContent.displayName = "AlertDialogContent";

// Header container for the dialog
const AlertDialogHeader = ({ children, className, ...props }) => {
    return (
        <div className={cn("mb-4", className)} {...props}>
            {children}
        </div>
    );
};

// Title for the dialog
const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Title
        ref={ref}
        className={cn("text-lg font-bold", className)}
        {...props}
    />
));
AlertDialogTitle.displayName = "AlertDialogTitle";

// Description for the dialog
const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Description
        ref={ref}
        className={cn("text-sm text-gray-600", className)}
        {...props}
    />
));
AlertDialogDescription.displayName = "AlertDialogDescription";

// Action button for the dialog (the missing export)
const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Action
        ref={ref}
        className={cn(
            "inline-flex items-center justify-center rounded-md px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors",
            className
        )}
        {...props}
    />
));
AlertDialogAction.displayName = "AlertDialogAction";

// You can also create a Cancel button if needed
const AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Cancel
        ref={ref}
        className={cn(
            "inline-flex items-center justify-center rounded-md px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors",
            className
        )}
        {...props}
    />
));
AlertDialogCancel.displayName = "AlertDialogCancel";

export {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogPortal,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
};

