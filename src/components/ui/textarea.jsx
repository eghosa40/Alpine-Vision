import React from "react";
import PropTypes from "prop-types";

export function Textarea({ className, ...props }) {
    return (
        <textarea
            {...props}
            className={`border rounded px-2 py-1 focus:outline-none focus:ring ${className || ""}`}
        />
    );
}

Textarea.propTypes = {
    className: PropTypes.string,
};
