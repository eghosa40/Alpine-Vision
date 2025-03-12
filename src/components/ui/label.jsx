import * as React from "react";
import PropTypes from "prop-types";
import { cn } from "../../lib/utils";

const Label = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <label
            ref={ref}
            className={cn("block text-sm font-medium text-gray-800", className)}
            {...props}
        />
    );
});

Label.displayName = "Label";

Label.propTypes = {
    className: PropTypes.string,
};

export { Label };
