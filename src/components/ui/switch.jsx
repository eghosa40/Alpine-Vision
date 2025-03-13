import React from "react";
import PropTypes from "prop-types";
import { cn } from "src/lib/utils";

export function Switch({ checked, onChange, className, ...props }) {
    return (
        <button
            role="switch"
            aria-checked={checked}
            onClick={onChange}
            className={cn(
                "relative inline-flex items-center h-6 w-11 rounded-full transition-colors focus:outline-none",
                checked ? "bg-black" : "bg-gray-300",
                className
            )}
            {...props}
        >
      <span
          className={cn(
              "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
              checked ? "translate-x-6" : "translate-x-1"
          )}
      />
        </button>
    );
}

Switch.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
};
