'use client'
// import React, { useRef, useEffect } from 'react';
// import { createPopper } from '@popperjs/core';

// const MyComponent = () => {
//   const iconRef = useRef(null);
//   const popoverRef = useRef(null);

//   useEffect(() => {
//     if (iconRef.current && popoverRef.current) {
//       createPopper(iconRef.current, popoverRef.current, {
//         placement: 'bottom',
//       });
//     }
//   }, []);

//   return (
//     <div className="relative flex flex-col items-center group">
//       <svg
//         className="w-5 h-5"
//         ref={iconRef}
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 20 20"
//         fill="currentColor"
//       >
//         <path
//           fillRule="evenodd"
//           d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
//           clipRule="evenodd"
//         />
//       </svg>
//       <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex" ref={popoverRef}>
//         <div className="w-3 h-3 -mt-2 rotate-45 bg-cyan-400"></div>
//         <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">A bottom aligned popover.</span>
//       </div>
//     </div>
//   );
// };

// export default MyComponent;

import { useState, useEffect, useRef } from 'react';
import { createPopper, Instance } from '@popperjs/core';
import { RiInboxFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCalculator } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";

interface Item {
    icon: any;
    text: string;
}

const items: Item[] = [
    { icon: RiInboxFill, text: 'Add an Order' },
    { icon: TbTruckDelivery, text: 'Create a Quick Shipment' },
    { icon: FaCalculator, text: 'Rate Calculator' },
    { icon: IoTicketSharp, text: 'Create a Ticket' },
    { icon: FaMapLocationDot, text: 'Create a Ticket' },
];

const PopoverButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [popperInstance, setPopperInstance] = useState<Instance | null>(null);

    const handleClick = () => {
        if (window.innerWidth <= 768) {
            setIsOpen(!isOpen);
        }
    };

    const handleMouseEnter = () => {
        if (window.innerWidth > 768) {
            setIsOpen(true);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth > 768) {
            setIsOpen(false);
        }
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
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='hidden bg-slate-300 rounded-md p-[3px] px-[10px] md:flex items-center gap-1 '
            >
                Quick Access
            </button>
            {isOpen && (
                <div
                    ref={popoverRef}
                    data-popover
                    id="popover-default"
                    role="tooltip"
                    className="absolute z-10 inline-block w-[800px] h-44  text-sm text-gray-500 transition-opacity duration-300 rounded-full opacity-100"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >

                    <div className='flex justify-center items-center bg-white w-full h-44 rounded-xl border border-solid border-gray-50 mt-4'>
                        <div className='mx-3 flex flex-row gap-2 w-full p-5 '>
                            {items.map((item, index) => (
                                <div key={index} className="my-3 py-3 flex flex-col justify-center items-center md:gap-[20px] gap-[20px] rounded-lg w-11/12 h-25 bg-[#F8F6FE] border hover:border-purple-500">
                                    <span className='flex bg-white rounded-[50%] w-[60px] h-[60px] items-center justify-center text-[35px]'>
                                        <item.icon />
                                    </span>
                                    <span className="text-xs w-11/12 mx-0 text-black text-center">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div data-popper-arrow></div>
                </div>
            )}
        </div>
    );
};

export default PopoverButton;

