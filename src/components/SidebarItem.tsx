import { SidebarItemProp } from "@/types";
import Link from "next/link";
import React from "react";

const SidebarItem = (prop: SidebarItemProp) => {
  const handleClick = () => {
    prop.onItemClick(prop.title);
  };

  return (
    <Link
      href={prop.address}
      className={`flex flex-row items-center gap-2 px-3 py-2 
      ${
        prop.isActive
          ? "bg-white rounded text-black"
          : "hover:bg-white hover:rounded hover:text-black transition-all duration-300 ease-in-out"
      } 
      ${prop.isExpanded ? "justify-start" : "justify-center"}`}
      onClick={handleClick}
    >
      <div className={`flex items-center ${prop.isExpanded ? "mr-2" : ""}`}>
        <prop.Icon className="text-xl text-[#B989FF]" />
      </div>
      {prop.isExpanded && <p className="whitespace-nowrap text-sm">{prop.title}</p>}
    </Link>
  );
};

export default SidebarItem;