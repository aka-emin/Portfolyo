import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
                           children,
                           variant = 'primary',
                           size = 'md',
                           className = '',
                           onClick,
                           ...props
                       }: ButtonProps) => {
    const baseClasses = 'rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center';

    const variantClasses = {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
        ghost: 'text-blue-600 hover:bg-blue-600/10',
    };

    const sizeClasses = {
        sm: 'text-sm px-4 py-2',
        md: 'px-6 py-3',
        lg: 'text-lg px-8 py-4',
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
        <button className={classes} onClick={onClick} {...props}>
            {children}
        </button>
    );
};