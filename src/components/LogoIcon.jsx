import React from 'react';

const LogoIcon = ({ size = 36, className = '' }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Right Blue Part (Fold/Y outline) */}
            <path
                d="M 55 25 L 85 25 L 45 80 L 45 90"
                stroke="#5B7CFF"
                strokeWidth="6.5"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="4"
            />
            <path
                d="M 55 25 L 40 50"
                stroke="#5B7CFF"
                strokeWidth="6.5"
                strokeLinecap="butt"
            />

            {/* Left Teal Part (F structure) */}
            <path
                d="M 45 25 L 15 25 L 35 60 L 35 90"
                stroke="#3AAFA9"
                strokeWidth="6.5"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="4"
            />
            <path
                d="M 23 42 L 50 42"
                stroke="#3AAFA9"
                strokeWidth="6.5"
                strokeLinecap="butt"
            />
        </svg>
    );
};

export default LogoIcon;
