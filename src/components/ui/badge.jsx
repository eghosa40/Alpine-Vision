import React from "react";
import PropTypes from "prop-types";
import { cn } from "src/lib/utils";

export function Badge({ children, variant = "default", className, ...props }) {
    const variantClasses = {
        default: "bg-gray-200 text-gray-800",
        success: "bg-green-200 text-green-800",
        error: "bg-red-200 text-red-800",
        warning: "bg-yellow-200 text-yellow-800",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center px-2 py-1 rounded text-xs font-medium",
                variantClasses[variant],
                className
            )}
            {...props}
        >
      {children}
    </span>
    );
}

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["default", "success", "error", "warning"]),
    className: PropTypes.string,
};
