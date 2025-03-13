import React from "react";
import PropTypes from "prop-types";
import { cn } from "src/lib/utils";

export function Table({ className, ...props }) {
    return <table className={cn("w-full border-collapse", className)} {...props} />;
}

Table.propTypes = {
    className: PropTypes.string,
};

export function TableHeader({ className, ...props }) {
    return <thead className={cn("bg-gray-50", className)} {...props} />;
}

TableHeader.propTypes = {
    className: PropTypes.string,
};

export function TableBody({ className, ...props }) {
    return <tbody className={cn("", className)} {...props} />;
}

TableBody.propTypes = {
    className: PropTypes.string,
};

export function TableRow({ className, ...props }) {
    return <tr className={cn("border-b border-gray-200", className)} {...props} />;
}

TableRow.propTypes = {
    className: PropTypes.string,
};

export function TableHead({ className, ...props }) {
    return (
        <th
            className={cn("px-4 py-2 text-left text-sm font-semibold text-gray-900", className)}
            {...props}
        />
    );
}

TableHead.propTypes = {
    className: PropTypes.string,
};

export function TableCell({ className, ...props }) {
    return (
        <td className={cn("px-4 py-2 text-sm text-gray-700", className)} {...props} />
    );
}

TableCell.propTypes = {
    className: PropTypes.string,
};
