'use client'

import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { createPopper, Instance } from '@popperjs/core';

const WalletPopover = () => {

    
        const [isOpen, setIsOpen] = useState(false);
        const [popperInstance, setPopperInstance] = useState<Instance | null>(null);
    
        const handleMouseEnter = () => {
            setIsOpen(true);
        };
    
        const handleMouseLeave = () => {
            setIsOpen(false);
        };
    
        const buttonRef = useRef<HTMLButtonElement>(null);
        const popoverRef = useRef<HTMLDivElement>(null);
    
        useEffect(() => {
            if (isOpen && buttonRef.current && popoverRef.current) {
                const instance = createPopper(buttonRef.current, popoverRef.current, {
                    placement: 'bottom',
                });
                setPopperInstance(instance);
            } else {
                if (popperInstance) {
                    popperInstance.destroy();
                    setPopperInstance(null);
                }
            }
        }, [isOpen, popperInstance]);
    
        return (
            <div className="relative inline-block">
                <button
                    ref={buttonRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className='hidden bg-slate-300 rounded-md p-[3px] px-[10px] md:flex items-center gap-1 '
                >
                    ₹0 
                </button>
                {isOpen && (
                    <div
                        ref={popoverRef}
                        data-popover
                        id="popover-default"
                        role="tooltip"
                        className="absolute z-10 inline-block w-[200px]  text-sm text-gray-500 transition-opacity duration-300 rounded-full opacity-100"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
    
                        <div className='flex justify-center items-center bg-white w-full h-14 rounded-xl border border-solid border-gray-50 mt-4'>Usable Amount:₹0</div>
                        <div data-popper-arrow></div>
                    </div>
                )}
            </div>
        );
    
}
export default WalletPopover
