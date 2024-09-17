import React from 'react';

interface FieldProps {
    children: React.ReactNode;
    fontSize: number
    color: string
    fontWeight?: number
}

const Field: React.FC<FieldProps> = ({children, fontSize, color, fontWeight=400}) => {
    return (
        <span style={{fontSize: `${fontSize}px`, color, fontWeight}}>{children}</span>
    );
};

export default Field;