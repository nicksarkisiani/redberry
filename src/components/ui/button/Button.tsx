import React, {MouseEventHandler} from 'react';

interface ButtonProps {
    children?: React.ReactNode;
    color?: string
    textColor?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;