import * as React from "react";
import PropTypes from "prop-types";
import { cn } from "../../lib/utils";

const Button = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={cn(
                "px-4 py-2 rounded-md text-white transition",
                className
            )}
            {...props}
        />
    );
});

Button.displayName = "Button";

// ✅ Add PropTypes validation
Button.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.string,
};

export { Button };

