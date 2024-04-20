'use client'

import React, { useState } from 'react';
import { FaBell } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { AiFillThunderbolt } from "react-icons/ai";
import { RxReload } from "react-icons/rx";
import NotificationPopup from '@/app/Notification/NotificationPopup';
import Dropdown from '@/components/Dropdown';
import Popover from "@/components/Popover";
import WalletPopover from './WalletPopover';





const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div className='flex bg-white justify-end gap-[15px] text-[12px] py-[10px]'>
      <span className='hidden bg-slate-300 rounded-md p-[3px] px-[10px] md:flex items-center gap-1'><AiFillThunderbolt /><Popover /></span>
      <div className='flex gap-[15px]'>
        <div className='flex items-center text-slate-600 text-[14px] gap-[5px] mr-3 md:m-0'>
          <IoWallet />
          {/* <p> ₹0 </p> */}
          <WalletPopover />
          <button className='hidden md:block cursor-pointer'>
            <RxReload />
          </button>
        </div>
        <button className='hidden md:block bg-purple-100 p-[5px] px-[10px] rounded-md'>Recharge Wallet</button>
      </div>
      <div className='md:flex hidden flex-wrap items-center text-slate-600 mx-2 gap-[10px] ' >
        <div className='relative flex'>
          <button className='text-[16px] ' onClick={togglePopup}><FaBell />
            {/* <Notification/> */}
          </button>
          <NotificationPopup isOpen={isPopupOpen} onClose={togglePopup} />
          <div className='absolute w-[15px] h-[15px] top-[-8px] left-[5px] z-0 rounded-[50%] flex items-center justify-center text-white bg-red-500'>23</div>
        </div>
        <button className='text-[20px]'><CgMenuGridO /></button>

        {/* <div className='flex items-center'>
          <FaUser className='text-[16px]' />
          <select name="" id="" className=''>
            <option value=""></option>
          </select>
        </div> */}

        {/* <div className=" flex gap-x-5">
          <div className="group hidden md:block">
            <button className="bg-white text-gray-700 font-medium py-1.5 px-5 rounded inline-flex items-center">
              <FaUser className='text-[16px]' />
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
              <li className="">
                <a className="rounded-t bg-gray-200  hover:bg-blue-500 hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">User</a>
              </li>
              <li className="">
                <div className='flex justify-evenly'>
                <FaUser/>
                <a className="bg-gray-200  hover:bg-blue-500 hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">Current Plan</a>
                </div>
              </li>
            </ul>          
          </div>
        </div> */}

        <Dropdown/>

        
        


      </div>

    </div>
  )
}

export default Header;
