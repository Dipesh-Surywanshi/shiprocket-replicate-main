"use client";

import { useState } from "react";
import Image from "next/image";

import { sidebarItems } from "@/constants";

import ShypbuddyCartLogo from "../../public/Shypbuddy-Cart-Logo.png";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  const handleItemClick = (title: any) => {
    setActiveItem(title);
  };

  return (
    <div
      className={`bg-[#06064d] h-screen p-5 md:hidden lg:flex items-center relative hidden ${
        isExpanded ? "w-60" : "w-20"
      } transition-all duration-500 ease-in-out`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex flex-col gap-3 justify-center"
        style={{
          maxHeight: "calc(100% - 40px)",
        }}
      >
        {/* <div className="flex-row">
          <Image src={ShypbuddyCartLogo} alt="Shypbuddy Cart Logo" height={20} />
          <p className="font-bold"><span className="text-pink-600">Shyp</span><span className="bg-blue-500">BUDDY</span></p>
        </div> */}

        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            title={item.title}
            address={item.address}
            Icon={item.Icon}
            isExpanded={isExpanded}
            isActive={activeItem === item.title}
            onItemClick={handleItemClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;