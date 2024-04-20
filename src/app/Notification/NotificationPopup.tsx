// NotificationPopup.js
import React from 'react';
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineLaunch } from "react-icons/md";

interface NotificationPopupProps {
    isOpen: boolean;
    onClose: () => void;
  }

const updates = [
    {
      id: 1,
      isNew: true,
      date: "Mar 30, 2024",
      logoSrc: "/rocket.png",
      altText: "Shiprocket Logo",
      title: "Opertional callout -EASTER festival",
      description: "This is to inform you that due to 'Easter festival' there might be delay in pickup & delivery",
      buttonText: "Learn more",
    }, {
      id: 2,
      isNew: true,
      date: "Mar 30, 2024",
      logoSrc: "/rocket.png",
      altText: "Shiprocket Logo",
      title: "Opertional callout -Farmer Protest",
      description: "Due to the farmers' movement reaching Delhi's Ramlila for Kisan Mahapanchayat, major parts of DELHI will be impacted for Pickups and deliveries.",
      buttonText: "Opertional Impact - Farmer - Protest ",
    }, {
      id: 3,
      isNew: true,
      date: "Mar 30, 2024",
      logoSrc: "/rocket.png",
      altText: "Shiprocket Logo",
      title: "Opertional callout -EASTER festival",
      description: "This is to inform you that due to 'Easter festival' there might be delay in pickup & delivery",
      buttonText: "Opertional callout -EASTER Festival",
    }, {
      id: 4,
      isNew: true,
      date: "Mar 30, 2024",
      logoSrc: "/rocket.png",
      altText: "Shiprocket Logo",
      title: "Opertional callout -EASTER festival",
      description: "This is to inform you that due to 'Easter festival' there might be delay in pickup & delivery",
      buttonText: "Opertional callout -EASTER Festival",
    }, {
      id: 5,
      isNew: true,
      date: "Mar 30, 2024",
      logoSrc: "/rocket.png",
      altText: "Shiprocket Logo",
      title: "Opertional callout -EASTER festival",
      description: "This is to inform you that due to 'Easter festival' there might be delay in pickup & delivery",
      buttonText: "Opertional callout -EASTER Festival",
    }, {
      id: 6,
      isNew: true,
      date: "Mar 30, 2024",
      logoSrc: "/rocket.png",
      altText: "Shiprocket Logo",
      title: "Opertional callout -EASTER festival",
      description: "This is to inform you that due to 'Easter festival' there might be delay in pickup & delivery",
      buttonText: "Opertional callout -EASTER Festival",
    },
    // Add more update objects as needed
  ];

const NotificationPopup: React.FC<NotificationPopupProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`z-20 w-[400px] bg-white h-screen fixed top-0 right-1 bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
            <div className="absolute right-0 top-0 bottom-0 bg-white shadow-lg">
                {/* Content of your popup */}
                
                <div className=" w-96 right-0 absolute h-full font-sans text-2xl py-2 shadow-lg">
                    <div className="bg-white  py-2 flex justify-between px-2">
                        <p className="px-2 font-normal">Shiprocket Updates</p>
                        <button onClick={onClose}><IoMdClose size={30} /></button>
                        
                    </div>
                    <hr className="mt-2 border-black" />
                    <div className="h-full px-4 mt-2 overflow-auto no-scroll bg-white">
                        {updates.map((update) => (
                            <div key={update.id} className="w-full mb-4 over flex flex-col hover:shadow-xl gap-2 p-4 border rounded-md bg-white">
                                <div className="w-full text-sm flex justify-between items-center">
                                    <div>
                                        {update.isNew && (
                                            <span className="bg-green-200 text-green-600 px-2 py-0.5 text-xs rounded-sm">
                                                New
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-500 flex py-auto text-xs">
                                        <FaRegClock className="mx-2 mt-0.5" />
                                        {update.date}
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <div className="p-2">
                                        <Image
                                            width={40}
                                            height={40}
                                            src={update.logoSrc}
                                            alt={update.altText}
                                            className="dark:invert"
                                        />
                                    </div>
                                    <div className="items-center">
                                        <p className="font-semibold text-slate-800 text-base items-center">
                                            {update.title}
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <p className="text-sm tracking-normal font-[500px] text-gray-500">
                                        {update.description}
                                    </p>
                                </div>
                                <div className="items-center">
                                    <button className="bg-[#775de3] text-white rounded-md font-normal text-sm text-center hover:shadow-lg px-4 flex items-center">
                                        <span className="flex items-center py-1">
                                            {update.buttonText}
                                            <MdOutlineLaunch className="ml-1 mt-1" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default NotificationPopup;
