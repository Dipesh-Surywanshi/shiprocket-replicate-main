'use client'

import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { createPopper, Instance } from '@popperjs/core';
import { RiInboxFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCalculator } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaHome, FaUser } from "react-icons/fa";
import { TiFlash } from "react-icons/ti";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";





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

const buttons = [
    { icon: <FaHome size={20} />, label: 'Home' },
    { icon: <TiFlash size={20} />, label: 'Quick Actions' },
    { icon: <CgMenuGridO size={40} />, label: '' }, // Add label if needed
    { icon: <IoIosNotifications size={20} />, label: 'Notifications' },
    { icon: <FaUser size={16} />, label: 'User' },
];

const Bottom: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [popperInstance, setPopperInstance] = useState<Instance | null>(null);


    const handleButtonClick = () => {
        // Handle the click event
        setIsOpen(!isOpen);
        console.log('Button clicked!');
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

        // <div className='flex justify-evenly bg-cyan-200 '>
        //     <button className='flex flex-col items-center p-3.5'>
        //         <FaHome size={20}/>
        //         <p>Home</p>
        //     </button>
        //     <button className='flex flex-col items-center p-2.5'>
        //         {/* <img src='./flash.png' alt='flash' /> */}
        //         <TiFlash size={24}/>
        //         <p>Quick Actions</p>
        //     </button>
        //     <button className='flex flex-col items-center p-2.5'>
        //         <CgMenuGridO size={55}/>
        //     </button>
        //     <button className='flex flex-col items-center p-2.5'>
        //         <IoIosNotifications size={23}/>
        //         <p>Notifications</p>
        //     </button>
        //     <button className='flex flex-col items-center p-4'>
        //         <FaUser size={16}/>
        //         <p>User</p>
        //     </button>
        // </div>

        <>
            <div className=' fixed flex justify-evenly gap-1 grow bg-gray-400 md:hidden bottom-0 left-0 right-0 z-20'>
                {/* <ButtonWithIcon icon={<FaHome size={15} />} label="Home" onClick={handleButtonClick}/> */}
                <div className='relative '>
                    {/* <button onClick={handleButtonClick}>Access</button> */}
                    <div className='flex justify-evenly items-center bg-slate-200 w-screen grow'>
                        {buttons.map((button, index) => (
                            <button
                                key={index}
                                className='flex flex-col items-center p-1'
                                onClick={handleButtonClick}
                            >
                                {button.icon}
                                <p className='text-[10px]'>{button.label}</p>
                            </button>
                            // <ButtonWithIcon icon={<FaUser size={15} />} label="User" onClick={handleButtonClick} />
                        ))}
                    </div>
                </div>
                <div className={`absolute ${isOpen ? 'bottom-[40px]' : 'top-[50px]'} left-0 bg-cyan-100 rounded-lg w-screen grow max-h-[80vh] overflow-y-auto overflow-hidden p-5 z-[-1] `} >
                    <div className='flex justify-between'>
                        Quick Access
                        <button >Close</button>
                    </div>
                    <div className=' grid grid-cols-2 grid-flow-row gap-2 w-full '>
                        {items.map((item, index) => (
                            <div key={index} className="my-3 py-3 flex flex-col justify-center items-center md:gap-[20px] gap-[20px] rounded-lg w-11/12 h-25 bg-[#F8F6FE] border hover:border-purple-500 ">
                                <span className='flex bg-white rounded-[50%] w-[60px] h-[60px] items-center justify-center text-[35px]'>
                                    <item.icon />
                                </span>
                                <button onClick={handleButtonClick}>
                                    <span className="text-xs w-11/12 mx-0 text-black text-center">{item.text}</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Bottom




{/* <div className='flex justify-evenly bg-cyan-200 '>
    <button className='flex flex-col items-center p-3.5' >
        <FaHome size={20} />
        <p>Home</p>
    </button>
    <button className='flex flex-col items-center p-2.5' onClick={handleButtonClick}>
        <img src='./flash.png' alt='flash' />
        <TiFlash size={24} />
        <p>Quick Actions</p>
    </button>
    <button className='flex flex-col items-center p-2.5'>
        <CgMenuGridO size={55} />
    </button>
    <button className='flex flex-col items-center p-2.5'>
        <IoIosNotifications size={23} />
        <p>Notifications</p>
    </button>
    <button className='flex flex-col items-center p-4'>
        <FaUser size={16} />
        <p>User</p>
    </button>
</div> */}



{/* <ButtonWithIcon icon={<CgMenuGridO size={40} />} onClick={handleButtonClick}/>
<ButtonWithIcon icon={<IoIosNotifications size={15} />} label="Notifications" onClick={handleButtonClick}/>
<ButtonWithIcon icon={<FaUser size={15} />} label="User" onClick={handleButtonClick}/> */}