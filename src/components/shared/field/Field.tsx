import React from 'react';

interface FieldProps {
    children: React.ReactNode;
    fontSize: number
    color: string
    fontWeight?: number
    width?: string
    lineHeight?: string
}

const Field: React.FC<FieldProps> = ({children, fontSize, color, lineHeight, width, fontWeight=400}) => {
    return (
        <span style={{fontSize: `${fontSize}px`, color, fontWeight, width, lineHeight}}>{children}</span>
    );
};

export default Field;