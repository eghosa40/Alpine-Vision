import * as React from "react";
import PropTypes from "prop-types";
import { cn } from "../../lib/utils";

const Card = ({ className, children, ...props }) => {
    return (
        <div className={cn("rounded-lg border bg-white shadow-sm", className)} {...props}>
            {children}
        </div>
    );
};

const CardHeader = ({ className, children, ...props }) => {
    return (
        <div className={cn("px-4 py-2 border-b", className)} {...props}>
            {children}
        </div>
    );
};

const CardTitle = ({ className, children, ...props }) => {
    return (
        <h3 className={cn("text-lg font-semibold", className)} {...props}>
            {children}
        </h3>
    );
};

const CardDescription = ({ className, children, ...props }) => {
    return (
        <p className={cn("text-sm text-gray-500", className)} {...props}>
            {children}
        </p>
    );
};

const CardContent = ({ className, children, ...props }) => {
    return (
        <div className={cn("p-4", className)} {...props}>
            {children}
        </div>
    );
};

const CardFooter = ({ className, children, ...props }) => {
    return (
        <div className={cn("px-4 py-2 border-t", className)} {...props}>
            {children}
        </div>
    );
};

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

CardHeader.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

CardTitle.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

CardDescription.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

CardContent.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

CardFooter.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
