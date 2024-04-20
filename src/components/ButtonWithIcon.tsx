'use client'

import React from 'react';

interface ButtonWithIconProps {
    icon: React.ReactNode;
    label?: string;
    onClick: () => void;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ icon, label, onClick }) => {
    return (
        <div>
            {/* <button className='flex flex-col items-center justify-center p-1.5'>
                {icon}
                {label && <p className="text-xs">{label}</p>}
            </button> */}
            <button onClick={onClick} className="flex flex-col items-center justify-center p-1.5">
                {icon}
                {/* <span>{label}</span> */}
                {label && <p className="text-xs">{label}</p>}
            </button>
        </div>
    );
};

export default ButtonWithIcon;
