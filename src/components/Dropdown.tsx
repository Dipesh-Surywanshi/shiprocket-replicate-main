'use client'

import React, { useState, useEffect } from 'react';
import { FaUser } from "react-icons/fa";
import { GrPlan } from "react-icons/gr";
import { BsGiftFill } from "react-icons/bs";
import { HiMiniHandThumbUp } from "react-icons/hi2";

const Dropdown: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const dropdownButton = document.getElementById('dropdown-button');
            const dropdownMenu = document.getElementById('dropdown-menu');

            if (dropdownButton && dropdownMenu) {
                if (!dropdownButton.contains(event.target as Node) && !dropdownMenu.contains(event.target as Node)) {
                    setIsDropdownOpen(false);
                }
            }
        };


        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            {/* component */}
            <div >
                <div className="relative inline-block text-left">
                    <button
                        id="dropdown-button"
                        className="inline-flex justify-center w-full px-2 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-slate-200 rounded-md shadow-sm "
                        onClick={toggleDropdown}
                    >
                        <div className='flex items-center'>
                            <FaUser />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 ml-2 -mr-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </button>
                    <div
                        id="dropdown-menu"
                        className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${isDropdownOpen ? '' : 'hidden'
                            }`}
                    >
                        <div className="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
                            <a className="flex  items-center gap-5 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                                <FaUser />
                                User
                            </a>
                            <a className="flex  items-center gap-5 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                                <GrPlan />
                                Current Plan
                            </a>
                            <a className="flex  items-center gap-5 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                                <BsGiftFill />
                                Refer & Earn
                            </a>
                            <a className="flex block items-center gap-5 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                                <HiMiniHandThumbUp />
                                Refer & Earn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
