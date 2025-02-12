import * as React from "react";
import PropTypes from "prop-types"; // ✅ Fix: Import PropTypes
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "src/lib/utils.js";

const NavigationMenu = NavigationMenuPrimitive.Root;
const NavigationMenuList = NavigationMenuPrimitive.List;
const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuLink = React.forwardRef(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Link
        ref={ref}
        className={cn("text-sm font-medium hover:text-primary", className)}
        {...props}
    />
));

NavigationMenuLink.displayName = "NavigationMenuLink"; // ✅ Fix Display Name Warning

// ✅ Fix PropTypes Warning
NavigationMenuLink.propTypes = {
    className: PropTypes.string,
};

export { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink };

