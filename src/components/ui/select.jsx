// src/components/ui/select.jsx
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "src/lib/utils";

const Select = SelectPrimitive.Root;

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
        ref={ref}
        className={cn(
            "flex items-center justify-between rounded border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-black",
            className
        )}
        {...props}
    >
        {children}
    </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = "SelectTrigger";

const SelectValue = SelectPrimitive.Value;

const SelectContent = React.forwardRef(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Content
        ref={ref}
        className={cn(
            "overflow-hidden bg-white rounded-md shadow-md",
            className
        )}
        {...props}
    >
        {children}
    </SelectPrimitive.Content>
));
SelectContent.displayName = "SelectContent";

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
        ref={ref}
        className={cn(
            "cursor-pointer select-none rounded px-3 py-2 text-sm text-gray-800 hover:bg-gray-100",
            className
        )}
        {...props}
    >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
));
SelectItem.displayName = "SelectItem";

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
