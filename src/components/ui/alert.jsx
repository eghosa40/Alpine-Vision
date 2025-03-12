import * as React from "react";
import PropTypes from "prop-types";
import { cn } from "../../lib/utils";

const Alert = ({ className, children, ...props }) => {
    return (
        <div className={cn("rounded-md border p-4 bg-red-50 border-red-400", className)} {...props}>
            {children}
        </div>
    );
};

const AlertDescription = ({ className, children, ...props }) => {
    return (
        <p className={cn("text-sm text-red-700", className)} {...props}>
            {children}
        </p>
    );
};

Alert.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

AlertDescription.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export { Alert, AlertDescription };
