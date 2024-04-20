'use client'

import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { RiInboxFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCalculator } from "react-icons/fa";
import { IoTicketSharp, IoClose } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";

interface Item {
    icon: any;
    text: string;
}

interface Props{
    onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const items: Item[] = [
    { icon: RiInboxFill, text: 'Add an Order' },
    { icon: TbTruckDelivery, text: 'Create a Quick Shipment' },
    { icon: FaCalculator, text: 'Rate Calculator' },
    { icon: IoTicketSharp, text: 'Create a Ticket' },
    { icon: FaMapLocationDot, text: 'Create a Ticket' },
];

const  PopOverUi: React.FC<Props> = ({ onClose }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="flex flex-col gap-2 w-full bg-cyan-300">

            <div className='flex flex-col bg-white w-full h-44 rounded-xl border border-solid border-gray-50 m-4 p-4 overflow-x-auto'>
                <div className="flex justify-between font-bold">
                    Quick Actions
                    {/* <IoClose size={23} /> */}
                    <button onClick={onClose}><IoClose size={23} /></button>
                </div>
                <div className=' grid grid-cols-2 grid-flow-row gap-2 w-full z-[-1]'>
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


            {/* <p className="text-small text-default-400"> {isOpen ? "true" : "false"}</p> */}
        </div>
    );
}

export default PopOverUi;