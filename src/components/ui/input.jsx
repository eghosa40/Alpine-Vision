// src/components/ui/input.jsx
import React from 'react';

export function Input(props) {
    return (
        <input
            {...props}
            className={`border rounded px-2 py-1 focus:outline-none focus:ring ${props.className}`}
        />
    );
}
